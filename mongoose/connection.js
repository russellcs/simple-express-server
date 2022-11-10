//import mongoose
const mongoose = require("mongoose");
const schemas = require("./schemas");

//connect to the mongo db database using mongoose
mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: false,
});

//get ref to the connection
const db = mongoose.connection;
//listen for errors and if working
db.on("error", (error) => {
  console.log("An error occured when connecting", error);
});
db.once("open", () => {
  console.log("Connection working!");
});

//actualy db stuff

const User = mongoose.model("Users", schemas.users);
const Token = mongoose.model("Token", schemas.tokens);

const onDb = (err, item) => {
  console.log(err, item);
};

const queries = {
  addUser: async (name, email, password) => {
    const item = new User({ name, email, password });
    return await item.save();
  },
  deleteUser: async (name) => {
    return await User.deleteOne({ name });
  },
  checkCreds: async (email, password) => {
    return await User.find({ email, password });
  },
  addToken: async (user_id, token) => {
    const item = new Token({ user_id, token });
    return await item.save();
  },
};

module.exports = queries;

//define what a dog is / create dog schema
// const customerSchema = new mongoose.Schema({
//   name: String,
//   balanceDue: Number,
//   tradeCustomer: Boolean,
// });

// //create a model / kida like a prototype
// const Customer = mongoose.model("Customer", customerSchema);

// const customers = [
//   { name: "Jack", balanceDue: 50, tradeCustomer: true },
//   { name: "Bobby", balanceDue: 150, tradeCustomer: true },
//   { name: "Sally", balanceDue: 250, tradeCustomer: false },
//   { name: "Mo", balanceDue: 25, tradeCustomer: true },
// ];

// const onSave = (err, item) => {
//   console.log(err, item);
// };

// customers.forEach((customer) => {
//   onAdd(customer);
// });

// export function onAdd(payload) {
//   const item = new Customer(payload);
//   item.save(onSave);
// }

// export function onDelete(customerName) {
//   Dog.deleteOne({ name: customerName }, (err, results) => {
//     console.log(err, results);
//   });
// }

// Dog.updateOne({ name: "Roland" }, { name: "Bobby" }, (err, results) => {
//   console.log(err, results);
// });

// Dog.deleteOne({ name: "Roland" }, (err, results) => {
//   console.log(err, results);
// });

// Dog.find({ name: /^Roland/ }, (err, results) => {
//   console.log(err, results);
// });

//create an instance of a dog
// const jack = new Dog({ name: "Jack", weight: 50, trained: true });
// const roland = new Dog({ name: "Roland", weight: 25, trained: false });

// jack.save(onSave);
// roland.save(onSave);
