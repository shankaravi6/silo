// import jwt from "jsonwebtoken";

// export const verifyToken = async (req, res, next) => {
//   try {
//     let token = req.header("Authorization");
//     if (!token) return res.status(403).send("Access denied");

//     if (token.startsWith("Bearer ")) {
//       token = token.slice(7, token.length).trimLeft();
//     }

//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


import jwt from "jsonwebtoken";

export const verifyToken = async (request, replay) => {
  try {
    let token = request.headers["authorization"];
    if (!token) {
        replay.status(403);
      throw new Error("Access denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWTSECRET);
    request.user = verified;
  } catch (err) {
    replay.code(500).send({ error: err.message });
  }
};
