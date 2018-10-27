/*
Navicat MySQL Data Transfer

Source Server         : sblack
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : moxi

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-27 19:09:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for buycar
-- ----------------------------
DROP TABLE IF EXISTS `buycar`;
CREATE TABLE `buycar` (
  `goodsname` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `qty` int(10) DEFAULT NULL,
  `uid` int(10) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of buycar
-- ----------------------------
INSERT INTO `buycar` VALUES ('面膜', '肌美净/KRACIE玻尿酸深层渗透超保湿面膜 5片装', '58.78', '../images/goodsMM.jpg', '2', '1');
INSERT INTO `buycar` VALUES ('巧克力', '【顺丰冷链包邮】白色恋人/WHITE LOVER 巧克力夹心饼干 36枚入', '248.00', '../images/goodsQKL.jpg', '11', '9');
INSERT INTO `buycar` VALUES ('北海道特产', '【日本直邮】北海道特产 毛蟹风味泡面 拉面 酱汤味', '32.47', '../images/goodsBHD.jpg', '13', '18');
INSERT INTO `buycar` VALUES ('白色恋人', '【顺丰冷链包邮】白色恋人/WHITE LOVER 巧克力夹心饼干 36枚入', '240.00', '../images/goodsBSLR.jpg', '11', '23');

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `offprice` int(255) NOT NULL,
  `goodsname` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('111', '面膜', '../images/goodsMM.jpg', '1', '肌美净/KRACIE玻尿酸深层渗透超保湿面膜 5片装', '58.78');
INSERT INTO `goodslist` VALUES ('222', '面膜', '../images/goodsMM.jpg', '2', '肌美净/KRACIE玻尿酸深层渗透超保湿面膜 5片装', '67.78');
INSERT INTO `goodslist` VALUES ('333', '面膜', '../images/goodsMM.jpg', '3', '肌美净/KRACIE玻尿酸深层渗透超保湿面膜 5片装', '56.78');
INSERT INTO `goodslist` VALUES ('444', '面膜', '../images/goodsMM.jpg', '4', '肌美净/KRACIE玻尿酸深层渗透超保湿面膜 5片装', '77.78');
INSERT INTO `goodslist` VALUES ('555', '美容', '../images/goodsMR.jpg', '5', '[香港直邮]BCL B&C LAB AHA 果柔洗颜美容洁面膏补水温和敏感肌1支', '87.00');
INSERT INTO `goodslist` VALUES ('666', '美容', '../images/goodsMR.jpg', '6', '[香港直邮]BCL B&C LAB AHA 果柔洗颜美容洁面膏补水温和敏感肌1支', '96.00');
INSERT INTO `goodslist` VALUES ('777', '美容', '../images/goodsMR.jpg', '7', '[香港直邮]BCL B&C LAB AHA 果柔洗颜美容洁面膏补水温和敏感肌1支', '85.00');
INSERT INTO `goodslist` VALUES ('888', '美容', '../images/goodsMR.jpg', '8', '[香港直邮]BCL B&C LAB AHA 果柔洗颜美容洁面膏补水温和敏感肌1支', '104.00');
INSERT INTO `goodslist` VALUES ('999', '巧克力', '../images/goodsQKL.jpg', '9', '【顺丰冷链包邮】白色恋人/WHITE LOVER 巧克力夹心饼干 36枚入', '248.00');
INSERT INTO `goodslist` VALUES ('1111', '巧克力', '../images/goodsQKL.jpg', '10', '【顺丰冷链包邮】白色恋人/WHITE LOVER 巧克力夹心饼干 36枚入', '257.00');
INSERT INTO `goodslist` VALUES ('2222', '巧克力', '../images/goodsQKL.jpg', '11', '【顺丰冷链包邮】白色恋人/WHITE LOVER 巧克力夹心饼干 36枚入', '246.00');
INSERT INTO `goodslist` VALUES ('3333', '巧克力', '../images/goodsQKL.jpg', '12', '【顺丰冷链包邮】白色恋人/WHITE LOVER 巧克力夹心饼干 36枚入', '285.00');
INSERT INTO `goodslist` VALUES ('4444', '胶原蛋白', '../images/goodsJYDB.jpg', '13', '【日本直邮】Essence in gel 美容原液胶原蛋白清洁卸妆乳 200g', '53.05');
INSERT INTO `goodslist` VALUES ('5555', '胶原蛋白', '../images/goodsJYDB.jpg', '14', '【日本直邮】Essence in gel 美容原液胶原蛋白清洁卸妆乳 200g', '64.05');
INSERT INTO `goodslist` VALUES ('6666', '胶原蛋白', '../images/goodsJYDB.jpg', '15', '【日本直邮】Essence in gel 美容原液胶原蛋白清洁卸妆乳 200g', '55.05');
INSERT INTO `goodslist` VALUES ('7777', '胶原蛋白', '../images/goodsJYDB.jpg', '16', '【日本直邮】Essence in gel 美容原液胶原蛋白清洁卸妆乳 200g', '66.05');
INSERT INTO `goodslist` VALUES ('8888888', '北海道特产', '../images/goodsBHD.jpg', '17', '【日本直邮】北海道特产 毛蟹风味泡面 拉面 酱汤味', '21.47');
INSERT INTO `goodslist` VALUES ('9999', '北海道特产', '../images/goodsBHD.jpg', '18', '【日本直邮】北海道特产 毛蟹风味泡面 拉面 酱汤味', '32.47');
INSERT INTO `goodslist` VALUES ('100', '北海道特产', '../images/goodsBHD.jpg', '19', '【日本直邮】北海道特产 毛蟹风味泡面 拉面 酱汤味', '23.47');
INSERT INTO `goodslist` VALUES ('99', '北海道特产', '../images/goodsBHD.jpg', '20', '【日本直邮】北海道特产 毛蟹风味泡面 拉面 酱汤味', '44.47');
INSERT INTO `goodslist` VALUES ('88', '清汁', '../images/goodsQZ.jpg', '21', '大麦若叶100%清汁粉末 每盒200g抹茶风味', '61.83');
INSERT INTO `goodslist` VALUES ('232', '北海道特产', '../images/goodsBHD.jpg', '30', '【日本直邮】北海道特产 毛蟹风味泡面 拉面 酱汤味', '25.47');
INSERT INTO `goodslist` VALUES ('635', '白色恋人', '../images/goodsBSLR.jpg', '23', '【顺丰冷链包邮】白色恋人/WHITE LOVER 巧克力夹心饼干 36枚入', '240.00');
INSERT INTO `goodslist` VALUES ('745', '白色恋人', '../images/goodsBSLR.jpg', '24', '【顺丰冷链包邮】白色恋人/WHITE LOVER 巧克力夹心饼干 36枚入', '280.00');
INSERT INTO `goodslist` VALUES ('654', '白色恋人', '../images/goodsBSLR.jpg', '25', '【顺丰冷链包邮】白色恋人/WHITE LOVER 巧克力夹心饼干 36枚入', '251.00');
INSERT INTO `goodslist` VALUES ('654', '面膜', '../images/goodsMM.jpg', '26', '肌美净/KRACIE玻尿酸深层渗透超保湿面膜 5片装', '71.00');
INSERT INTO `goodslist` VALUES ('332', '北海道特产', '../images/goodsBHD.jpg', '27', '【日本直邮】北海道特产 毛蟹风味泡面 拉面 酱汤味', '31.00');
INSERT INTO `goodslist` VALUES ('334', '面膜', '../images/goodsMM.jpg', '28', '肌美净/KRACIE玻尿酸深层渗透超保湿面膜 5片装', '62.00');
INSERT INTO `goodslist` VALUES ('767', '北海道特产', '../images/goodsBHD.jpg', '29', '【日本直邮】北海道特产 毛蟹风味泡面 拉面 酱汤味', '22.00');
INSERT INTO `goodslist` VALUES ('898', '清汁', '../images/goodsQZ.jpg', '31', '大麦若叶100%清汁粉末 每盒200g抹茶风味', '63.00');
INSERT INTO `goodslist` VALUES ('565', '巧克力', '../images/goodsQKL.jpg', '32', '【顺丰冷链包邮】白色恋人/WHITE LOVER 巧克力夹心饼干 36枚入', '253.00');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `username` varchar(255) NOT NULL,
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('_nichen', '1', '_mima');
INSERT INTO `login` VALUES ('哈哈哈爱好', '2', '123456');
INSERT INTO `login` VALUES ('啊啊啊啊', '3', '123456');
INSERT INTO `login` VALUES ('啊啊啊哦', '4', '123324444');
INSERT INTO `login` VALUES ('小猪佩奇', '5', '123456');
INSERT INTO `login` VALUES ('小猪乔治', '6', 'aaaaa1');
INSERT INTO `login` VALUES ('玻璃玻璃', '7', '123456');
INSERT INTO `login` VALUES ('恐龙恐龙', '8', '123456');
INSERT INTO `login` VALUES ('呜呜呜', '9', '123456');
INSERT INTO `login` VALUES ('放弃治疗', '10', '123456');
INSERT INTO `login` VALUES ('捣蛋鬼', '11', 'aaaaaa');
INSERT INTO `login` VALUES ('12345', '12', 'aaaaaa');

-- ----------------------------
-- Table structure for moxicgoods
-- ----------------------------
DROP TABLE IF EXISTS `moxicgoods`;
CREATE TABLE `moxicgoods` (
  `uname` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `id` int(6) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of moxicgoods
-- ----------------------------
INSERT INTO `moxicgoods` VALUES ('babyBig', 'images/baby1.jpg', '1');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby2.jpg', '2');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby3.jpg', '3');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby4.jpg', '4');
INSERT INTO `moxicgoods` VALUES ('banner', 'images/banner_s1.jpg', '7');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby5.jpg', '5');
INSERT INTO `moxicgoods` VALUES ('babyBig', 'images/baby6.jpg', '6');
INSERT INTO `moxicgoods` VALUES ('banner', 'images/banner_s2.jpg', '8');
INSERT INTO `moxicgoods` VALUES ('banner', 'images/banner_s3.jpg', '9');
INSERT INTO `moxicgoods` VALUES ('banner', 'images/banner_s4.jpg', '10');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby2.jpg', '11');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby3.jpg', '12');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby5.jpg', '13');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby4.jpg', '14');
INSERT INTO `moxicgoods` VALUES ('banner', 'images/banner_s2.jpg', '15');
INSERT INTO `moxicgoods` VALUES ('banner', 'images/banner_s1.jpg', '16');
INSERT INTO `moxicgoods` VALUES ('banner', 'images/banner_s3.jpg', '17');
INSERT INTO `moxicgoods` VALUES ('banner', 'images/banner_s4.jpg', '18');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby8.jpg', '19');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby9.jpg', '20');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby10.jpg', '21');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby11.jpg', '22');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby12.jpg', '23');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby12.jpg', '24');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby10.jpg', '25');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby10.jpg', '26');
INSERT INTO `moxicgoods` VALUES ('banner', 'images/banner_s4.jpg', '27');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby8.jpg', '28');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby8.jpg', '29');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby11.jpg', '30');
INSERT INTO `moxicgoods` VALUES ('baby', 'images/baby11.jpg', '31');
SET FOREIGN_KEY_CHECKS=1;
