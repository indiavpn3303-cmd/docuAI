export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { input, type } = req.body;

    if (!input || !input.trim()) {
      return res.status(400).json({
        error: "Input is required"
      });
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return res.status(500).json({
        error: "OpenRouter API key is not configured"
      });
    }

    const prompts = {
      professional:
        "Rewrite the user's text as a clear, polished, professional document.",

      summary:
        "Summarize the user's text clearly. Keep the important information and remove unnecessary repetition.",

      email:
        "Turn the user's request into a professional, polite email. Include an appropriate subject line.",

      notes:
        "Turn the user's text into clean, organized notes using headings and bullet points where useful.",

      todo:
        "Turn the user's text into a clear, actionable to-do list."
    };

    const instruction =
      prompts[type] || prompts.professional;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://docu-ai-phi.vercel.app",
          "X-Title": "DocuAI"
        },
        body: JSON.stringify({
          model: "openai/gpt-5.3-chat",
          messages: [
            {
              role: "system",
              content:
                "You are DocuAI, a helpful document-writing assistant. Return only the finished document. Do not explain what you did."
            },
            {
              role: "user",
              content: `${instruction}\n\nUser text:\n${input.trim()}`
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenRouter error:", data);

      return res.status(response.status).json({
        error:
          data?.error?.message ||
          "OpenRouter request failed"
      });
    }

    const content =
      data?.choices?.[0]?.message?.content;

    if (!content) {
      return res.status(500).json({
        error: "No content returned by OpenRouter"
      });
    }

    return res.status(200).json({
      type: type || "professional",
      content: content.trim()
    });

  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      error: "Server error"
    });
  }
}