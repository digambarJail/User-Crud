exports.getUser = async (req, res) => {
    try {
      const { query } = req.query;
      const user = await User.findOne({
        $or: [{ username: query }, { email: query }],
      }).select("-password");
      if (!user) return res.status(404).json({ error: "User not found" });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  