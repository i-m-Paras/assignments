const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const zod = require("zod");

const adminSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(6),
});

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  const parseData = adminSchema.safeParse({
    username,
    password,
  });

  if (!parseData.success) {
    res.status(411).json({
      msg: "invalid credentials!",
    });
  } else {
    await Admin.create({
      username,
      password,
    });
    res.json({ message: "Admin created successfully" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic

  const { username, password } = req.body;

  const parseData = adminSchema.safeParse({
    username,
    password,
  });

  if (!parseData.success) {
    res.status(411).json({
      msg: "invalid credentials!",
    });
  } else {
    const user = await Admin.findOne({ username, password });

    if (user) {
      const token = jwt.sign({ username }, JWT_SECRET);

      res.json({
        token,
      });
    } else {
      res.status(411).json({
        msg: "Incorrect username and pass!",
      });
    }
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const data = req.body;

  const user = await Course.create({ ...data });

  res.json({
    message: "Course created successfully",
    courseId: user._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

module.exports = router;
