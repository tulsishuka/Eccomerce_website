// import { Request, Response } from "express";
// import asyncHandler from "../middlewares/asyncHandler";
// import Product from "../models/productModel";
// import Order from "../models/orderModel";

// interface AuthRequest extends Request {
//   user?: any;
// }

// export const CreateOrder = asyncHandler(
//   async (req: AuthRequest, res: Response): Promise<void> => {
//     const { email, firstName, lastName, phone, cartItem } = req.body;

//     if (!cartItem || cartItem.length < 1) {
//       res.status(400);
//       throw new Error("Cart is still empty!");
//     }

//     let orderItem: any[] = [];
//     let total = 0;

//     for (const cart of cartItem) {
//       const productData = await Product.findOne({ _id: cart.product });

//       if (!productData) {
//         res.status(404);
//         throw new Error("Product ID not found!");
//       }

//       const { name, price, _id } = productData as any;

//       const singleProduct = {
//         quantity: cart.quantity,
//         name,
//         price,
//         product: _id,
//       };

//       orderItem = [...orderItem, singleProduct];

//       total += cart.quantity * price;
//     }

//     const order = await Order.create({
//       itemDetail: orderItem,
//       total,
//       firstName,
//       lastName,
//       email,
//       phone,
//       user: req.user?._id,
//     });

//     res.status(201).json({
//       total,
//       order,
//       message: "Order added successfully!",
//     });
//   }
// );

// export const AllOrder = asyncHandler(
//   async (req: Request, res: Response): Promise<void> => {
//     const orders = await Order.find();

//     res.status(200).json({
//       data: orders,
//       message: "All orders displayed successfully!",
//     });
//   }
// );

// export const DetailOrder = asyncHandler(
//   async (req: Request, res: Response): Promise<void> => {
//     const order = await Order.findById(req.params.id);

//     res.status(200).json({
//       data: order,
//       message: "Order details displayed successfully!",
//     });
//   }
// );

// export const CurrentUserOrder = asyncHandler(
//   async (req: AuthRequest, res: Response): Promise<void> => {
//     const order = await Order.find({ user: req.user?._id });

//     res.status(200).json({
//       data: order,
//       message: "Current user orders displayed successfully!",
//     });
//   }
// );


import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import {
  createOrderService,
  getAllOrdersService,
  getOrderDetailService,
  getCurrentUserOrdersService,
} from "../services/order.service";

interface AuthRequest extends Request {
  user?: any;
}

export const CreateOrder = asyncHandler(
  async (req: AuthRequest, res: Response): Promise<void> => {

    const result = await createOrderService(req.body, req.user?._id);

    res.status(201).json({
      total: result.total,
      order: result.order,
      message: "Order added successfully!",
    });
  }
);

export const AllOrder = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {

    const orders = await getAllOrdersService();

    res.status(200).json({
      data: orders,
      message: "All orders displayed successfully!",
    });
  }
);


export const DetailOrder = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {

    const order = await getOrderDetailService(req.params.id as string);

    res.status(200).json({
      data: order,
      message: "Order details displayed successfully!",
    });
  }
);

export const CurrentUserOrder = asyncHandler(
  async (req: AuthRequest, res: Response): Promise<void> => {

    const order = await getCurrentUserOrdersService(req.user?._id);

    res.status(200).json({
      data: order,
      message: "Current user orders displayed successfully!",
    });
  }
);