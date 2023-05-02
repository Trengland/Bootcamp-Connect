// Define associations between models
User.hasOne(Bio, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Bio.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Bio };
