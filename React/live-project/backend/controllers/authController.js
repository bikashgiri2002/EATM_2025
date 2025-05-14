const Shop = require("../models/shopModel");
const bycrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;
  const shop = await Shop.findOne({ email });
  if (!shop) {
    return res.status(401).json({
      message: "Shop not found",
    });
  }
  if (!bycrypt.compareSync(password, shop.password)) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  return res.status(200).json({
    message: "Login successful",
    shop,
      });
};


const register = async (req, res) => {
    const { name, email, password, phone, address } = req.body;

    const existingShop = await Shop.findOne({email});
    if (existingShop) {
        return res.status(400).json({
            message: "Shop already exists",
        });
    }
    const shop = await Shop.create({
        name,
        email,
        password: bycrypt.hashSync(password, 10),
        phone,
        address
    });
    if (!shop) {
        return res.status(400).json({
            message: "Error creating shop",
        });
    }
    return res.status(201).json({
        message: "Shop created successfully",
    });
}

module.exports = {login, register};