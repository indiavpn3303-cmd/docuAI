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

    const result = {
      type: type || "professional",
      content: input.trim()
    };

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error: "Server error"
    });
  }
}