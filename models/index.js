const User = require("./User");
const Bio = require("./bio");
const Comment = require("./comment");

// Define associations between models
User.hasOne(Bio, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Bio.belongsTo(User, {
  foreignKey: "user_id",
});

Bio.hasMany(Comment, {
  foreignKey: "bio_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Bio, {
  foreignKey: "bio_id",
});

module.exports = { User, Bio, Comment };
