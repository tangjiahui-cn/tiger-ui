# 自动发布脚本
## tips: ${}里面是替换字符串，$()里面是替换命令

# 1、版本号更新
## 传入参数指定版本号
if [ "$1" ];
then
  npm --no-git-tag-version version --allow-same-version $1
  VERSION=$1
elif [ "$1" != "&&" ];
## 版本号加1
then
  npm --no-git-tag-version version --allow-same-version patch
  VERSION=$(node -p "require('./package.json').version")
fi
NAME=$(node -p "require('./package.json').name")

# 2、提交git记录
git commit -am "docs(.): publish version ${VERSION}"

# 3、标记tag
TAG_NAME=v${VERSION}
git tag -d ${TAG_NAME} 2>/dev/null
git tag ${TAG_NAME}

# 4、打印消息
printf "\n\n"
printf "【BUILD SUCCESS】\n"
printf "Tag is ${TAG_NAME}.\n"
printf "Version is ${VERSION}.\n"
printf "\n\n"

# 5、生成changelog
conventional-changelog -p angular -i CHANGELOG.md -s -r 0
git commit -am "docs(CHANGELOG.md): update changelog" # (新增提交，避免重写提交覆盖tag)

# 发布库
ADDRESS=https://registry.npmjs.org/
npm unpublish ${NAME}@${VERSION} 2>/dev/null --registry=${ADDRESS}
npm publish --registry=${ADDRESS}

# tag 推送到远程
git push origin --tags
