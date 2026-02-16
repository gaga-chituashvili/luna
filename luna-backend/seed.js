// const fs = require("fs");
// const path = require("path");

// const { sequelize } = require("./src/utils/db");
// const { CoffeeSchema } = require("./src/models/coffee-schema");

// async function seed() {
//   try {
//     await sequelize.authenticate();
//     console.log("DB connected");

//     // table reset (development mode)
//     await sequelize.sync({ force: true });

//     const sourcePath = path.join(__dirname, "assets", "coffeeimg.png");
//     const uploadsDir = path.join(__dirname, "uploads");

//     // შევამოწმოთ source არსებობს თუ არა
//     if (!fs.existsSync(sourcePath)) {
//       throw new Error("Source image not found in assets folder");
//     }

//     // თუ uploads არ არსებობს → შევქმნათ
//     if (!fs.existsSync(uploadsDir)) {
//       fs.mkdirSync(uploadsDir, { recursive: true });
//     }

//     const fileName = Date.now() + ".png";
//     const destPath = path.join(uploadsDir, fileName);

//     // ფაილის კოპირება uploads-ში
//     fs.copyFileSync(sourcePath, destPath);

//     const products = [
//       { name: "Espresso", price: 3, img: `/uploads/${fileName}`, tag: "hot" },
//       { name: "Americano", price: 4, img: `/uploads/${fileName}`, tag: "hot" },
//       { name: "Cappuccino", price: 6, img: `/uploads/${fileName}`, tag: "hot" },
//       { name: "Latte", price: 7, img: `/uploads/${fileName}`, tag: "hot" },
//       { name: "Flat White", price: 8, img: `/uploads/${fileName}`, tag: "hot" },
//       { name: "Macchiato", price: 5, img: `/uploads/${fileName}`, tag: "hot" },
//       { name: "Mocha", price: 9, img: `/uploads/${fileName}`, tag: "hot" },
//       { name: "Cortado", price: 6, img: `/uploads/${fileName}`, tag: "hot" },
//       { name: "Ristretto", price: 4, img: `/uploads/${fileName}`, tag: "hot" },
//       { name: "Lungo", price: 4, img: `/uploads/${fileName}`, tag: "hot" },

//       {
//         name: "Iced Latte",
//         price: 8,
//         img: `/uploads/${fileName}`,
//         tag: "cold",
//       },
//       { name: "Cold Brew", price: 9, img: `/uploads/${fileName}`, tag: "cold" },
//       {
//         name: "Iced Americano",
//         price: 6,
//         img: `/uploads/${fileName}`,
//         tag: "cold",
//       },
//       {
//         name: "Frappuccino",
//         price: 10,
//         img: `/uploads/${fileName}`,
//         tag: "cold",
//       },
//       {
//         name: "Iced Mocha",
//         price: 9,
//         img: `/uploads/${fileName}`,
//         tag: "cold",
//       },
//       {
//         name: "Vanilla Latte",
//         price: 9,
//         img: `/uploads/${fileName}`,
//         tag: "hot",
//       },
//       {
//         name: "Caramel Macchiato",
//         price: 10,
//         img: `/uploads/${fileName}`,
//         tag: "hot",
//       },
//       {
//         name: "Hazelnut Latte",
//         price: 9,
//         img: `/uploads/${fileName}`,
//         tag: "hot",
//       },
//       {
//         name: "White Mocha",
//         price: 10,
//         img: `/uploads/${fileName}`,
//         tag: "hot",
//       },
//       { name: "Affogato", price: 8, img: `/uploads/${fileName}`, tag: "cold" },
//     ];

//     await CoffeeSchema.bulkCreate(products);

//     console.log("✅ Products inserted successfully!");
//     process.exit();
//   } catch (error) {
//     console.error("❌ Seed error:", error.message);
//     process.exit(1);
//   }
// }

// seed();
