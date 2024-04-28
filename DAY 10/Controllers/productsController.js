const fsPromises = require("fs/promises");

const getAllProducts = async (req, res) => {
    // const data = fs.readFileSync('./data.json','utf8');   //1st implement
    const data = await fsPromises.readFile("./data.json", "utf8"); //2nd implement
    // const obj = JSON.parse(data);
    const arr = JSON.parse(data);
    res.json({
        status: "success",
        results: arr.length,
        data: {
            // products:arr  //this return whole array of data
            products:
                "Lightweight,Comfort,Summer,Trendy,Walking,Outdoor,Stylish,Training,Daily Use For Men  (White)", //this return only string
        },
    });

    // res.send("hello");
};

const addProduct = async (req, res) => {
    // console.log(Object.keys(req));
    // console.log(req.body);
    const data = req.body;
    // data.id = 121;
    // console.log(data);

    if (!data.price || !data.title) {
        res.json({
            status: "fail",
            message: "title or price must be provided",
        });
    } else {
        const db = await fsPromises.readFile("./data.json", "utf8");
        const arr = JSON.parse(db);
        const len = arr.length;
        const newProduct = data;
        if (len == 0) {
            newProduct.id = 1;
            // data.id=1;
            // console.log(arr);
            // arr.push(data);
            // console.log(arr);
        } else {
            newProduct.id = arr[len - 1].id + 1;
            // console.log(newProduct);
        }
        arr.push(newProduct);
        fsPromises.writeFile("./data.json", JSON.stringify(arr));

        res.json({
            status: "success",
            result: 1,
            data: {
                newProduct: newProduct,
            },
        });
        // res.send('...')
    }
};

module.exports = {
    getAllProducts,
    addProduct,
};
