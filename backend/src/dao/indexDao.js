const { pool } = require("../../config/database");

// 로그인 (회원검증)
exports.isValidUsers = async function (connection, userID, password) {
  const Query = `SELECT userIdx, nickname FROM Users where userID = ? and password = ? and status = 'A';`;
  const Params = [userID, password];

  const rows = await connection.query(Query, Params);

  return rows;
};

// 회원가입
exports.insertUsers = async function (connection, userID, password, nickname) {
  const Query = `insert into Users(userID, password, nickname) values (?,?,?);`;
  const Params = [userID, password, nickname];

  const rows = await connection.query(Query, Params);

  return rows;
};

exports.selectPlaces = async function (connection, category) {
  const selectAllPlacesQuery = `SELECT title, address, category, placeUrl FROM Tourspot where status = 'A';`;
  const selectCategorizedPlacesQuery = `SELECT title, address, category, placeUrl FROM Tourspot where status = 'A' and category = ?;`;

  const Params = [category];

  const Query = category
    ? selectCategorizedPlacesQuery
    : selectAllPlacesQuery;

  const rows = await connection.query(Query, Params);

  return rows;
};
