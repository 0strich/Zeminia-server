const { monsters } = require('../../models');

module.exports = {
  post: async (req, res, next) => {
    //*: 테스트를 위해 세션 인증 코드 없음 추후 추가 필요

    try {
      const { monster_name, level, hp, att, exp, drop } = req.body;
      const options = {
        monster_name,
        level,
        hp,
        att,
        exp,
        drop,
        img: req.file ? `/image/${req.file.filename}` : 'none'
      };
      await monsters.create(options);
      res.status(201).send({ monsterCreate: 'Success' });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      next();
    }
  }
};
