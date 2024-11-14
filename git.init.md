### …or create a new repository on the command line

```
echo "# yushulinfeng-webui" >> README.md
git init
git add .
git commit -m "first commit"
git tag -a v1.0.0-test -m "1.0.0-test 仅用于测试"
git branch -M main
git remote add origin git@github.com:yushulinfengxl/yushulinfeng-webui.git
git push -u origin main
git push origin v1.0.0-test
```


### …or push an existing repository from the command line

```
git remote add origin git@github.com:yushulinfengxl/yushulinfeng-webui.git
git branch -M main
git push -u origin main
```