const get = (req, res) => {
  let user = null;

  if (req.user) {
    user = req.user
  }

  res.json({
    entities: {
      user
    }
  })
};

module.exports = get;