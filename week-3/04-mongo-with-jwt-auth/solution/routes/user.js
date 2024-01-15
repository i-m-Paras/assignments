const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const zod = require("zod");

const adminSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(6),
});

// User Routes
router.post("/signup", async (req, res) => {
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
    await User.create({
      username,
      password,
    });
    res.json({ message: "User created successfully" });
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

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseId = req.params.courseId;

  await User.updateOne(
    { username },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
