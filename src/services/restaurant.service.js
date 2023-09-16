const { restaurants } = require("../models");

//for MySQL
//const { pool } = require('./index');

const addRestaurant = async (restaurantData) => {
  return await restaurants.create(restaurantData);

  /**
   * ========================================
   * If We are using MySQL as a DB
   * ========================================
   */
  const connection = await pool.getConnection();
  const [result] = await connection.execute(
    "INSERT INTO restaurants (name, address, contact) VALUES (?, ?, ?)",
    [name, address, contact]
  );
  connection.release();
  return res.json({ id: result.insertId });
};
const getRestaurant = async (restaurantId) => {
  console.log(restaurantId);
  return await restaurants.findOne({ _id: restaurantId });

  /**
   * ========================================
   * If We are using MySQL as a DB
   * ========================================
   */
};

const getRestaurants = async () => {
  return await restaurants.find({});

  /**
   * ========================================
   * If We are using MySQL as a DB
   * ========================================
   */
  const connection = await pool.getConnection();
  const [rows] = await connection.execute("SELECT * FROM restaurants");
  connection.release();
  return res.json(rows);
};

const updateRestaurant = async (restaurantId, updateData) => {
  return await restaurants.findOneAndUpdate({ _id: restaurantId }, updateData);

  /**
   * ========================================
   * If We are using MySQL as a DB
   * ========================================
   */
  const connection = await pool.getConnection();
  await connection.execute(
    "UPDATE restaurants SET name = ?, address = ?, contact = ? WHERE id = ?",
    [updateData.name, updateData.address, updateData.contact, restaurantId]
  );
  connection.release();
  res.json({ message: "Restaurant updated successfully" });
};

const deleteRestaurant = async (restaurantId) => {
  return await restaurants.findOneAndDelete({ _id: restaurantId });

  /**
   * ========================================
   * If We are using MySQL as a DB
   * ========================================
   */

  const connection = await pool.getConnection();
  await connection.execute("DELETE FROM restaurants WHERE id = ?", [
    restaurantId,
  ]);
  connection.release();
  res.json({ message: "Restaurant deleted successfully" });
};

module.exports = {
  addRestaurant,
  getRestaurant,
  getRestaurants,
  updateRestaurant,
  deleteRestaurant,
};
