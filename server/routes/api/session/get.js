const get = (req, res) => {
  if (!req.user) {
    res.status(200).json({
      entities: {
        user: null
      }
    });
  }

  res.status(200).json({
    entities: {
      user: {
        ...req.user
      }
    }
  });
};

module.exports = get;