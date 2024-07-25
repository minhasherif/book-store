const router = require("express").Router();
const User = require("../models/user");
const {authenticateToken} = require("./userAuth");



//put  book to cart

router.put("/add-to-cart",authenticateToken , async(req,res)=>{
    try {
        const { bookid , id } = req.headers;
        const userData = await User.findById(id);
        const isBookinCart = userData.cart.includes(bookid);
        if(isBookinCart){
            return res.json({
                status :"success",
                message:" book is already in cart",
            });
        }
        await User.findByIdAndUpdate(id, {
            $push: { cart: bookid },
        });

        return res.json({
            status: "success",
            message :"book added to cart",
        });

    }catch(error) {
        console.log(error);
        return res.status(500).json({ message:" an error occured"});
    }
}); 


//remove from cart

router.put("/remove-from-cart/:bookid", authenticateToken ,async(req,res)=>{
    try{
        const { bookid }=req.params;
        const {id} = req.headers;
        await User.findByIdAndUpdate(id, {
            $pull:{ cart: bookid},
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"an error occured"});
    }
});


// //cart of a particular user

// router.get("/get-user-cart",authenticateToken , async(req,res)=>{
//     try {
//         const { id } = req.headers;
//         const userData = await User.findById(id).populate("cart");
//         const cart = userData.cart.reverse();
//       return res.json({
//         status:"success",
//         data: cart,
//       });


//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Internal server error"});
//     }
// });
//cart of a particular user

router.get("/get-user-cart", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;

        if (!id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const userData = await User.findById(id).populate("cart");

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        const cart = userData.cart.reverse();

        return res.json({
            status: "success",
            data: cart,
        });
    } catch (error) {
        console.error("Error fetching user cart:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = router;