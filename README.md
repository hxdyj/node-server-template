### 启动项目
    cnpm start
    
### 单元测试
    cnpm run test

### 团队任务看板
* url:      https://trello.com/
* username: 951540966@qq.com
* password: 9692624

### 流程图
* url:      https://www.draw.io
    使用 【团队任务看板】账号登录
    
### 团队文档描述
* url:      https://www.showdoc.cc/
* username: wingblog
* password: 9692624

### mysql API
* url: https://github.com/typeorm/typeorm

### redis API
* url: https://github.com/NodeRedis/node_redis

### node assert API
* url: https://nodejs.org/api/assert.html

### 项目版本命名规则
example: v0.11
* 当项目在进行了局部修改或 bug 修正时，主版本号和子版本号都不变, 修正版本号加 1;
* 当项目在原有的基础上增加了部分功能时, 主版本号不变, 子版本号加 1, 修正版本号复位为 0, 因而可以被忽略掉;
* 当项目在进行了重大修改或局部修正累积较多, 而导致项目整体发生全局变化时, 主版本号加 1;

### 项目分支
* master：用于线上发布项目，不在此分支开发项目
* develop：开发分支，在此分支开发项目，在合并master，合并代码
`git merge develop`
* feature：临时分支，在添加某一些特殊功能的时候，不影响正常使用，可建立临时分支
