const {gql, ApolloServer} = require('apollo-server');
const axios = require('axios')

const cors = require('cors')
const sequelize = require('./config/database')

const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product,  {through: OrderItem})

const productRoutes = require('./routes/products')

const PORT= process.env.PORT

sequelize
  .sync()


const url = "https://course-api.com/react-useReducer-cart-project/"


const schema = buildSchema(`
  type User {
    id: String
    name: String
    job_title: String
    email: String
  }
  type Query {
    getUsers: [User],
    getUserInfo(id: Int) : User
  }
`);

const queryDB = (req, sql, args) => new Promise((resolve, reject) => {
    req.mysqlDb.query(sql, args, (err, rows) => {
        if (err)
            return reject(err);
        rows.changedRows || rows.affectedRows || rows.insertId ? resolve(true) : resolve(rows);
    });
});

const root = {
  getUsers: (args, req) => queryDB(req, "select * from users").then(data => data),
  getUserInfo: (args, req) => queryDB(req, "select * from users where id = ?", [args.id]).then(data => data[0])
};
    
  
  const server = new ApolloServer({ typeDefs, resolvers,
  //   csrfPrevention: true,

  // cache: "bounded",


  // dataSources: () => {

  //   return {

  //     moviesAPI: new MoviesAPI(),

  //     personalizationAPI: new PersonalizationAPI(),

  //   };

  
  });



  
  server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`Server running at ${url}`));