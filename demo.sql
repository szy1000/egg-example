CREATE TABLE user(
	id Int(10) not NULL auto_increment,
	name VARCHAR(20) not NULL DEFAULT 'admin' COMMENT '用户名',
	pwd VARCHAR(50) NOT	NULL COMMENT '密码',
	PRIMARY key(id)
)engine=INNODB CHARSET=utf8;

-- 查看表结构
SHOW TABLES;

-- 查看表结构
DESC USER

-- 删除表
DROP TABLE USER

-- 插入数据

INSERT INTO USER VALUES(1, 'shenzhiyong', '123456');
-- 指定插入数据
INSERT INTO user(name,pwd) VALUES('szy', '3123');