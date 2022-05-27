# 代码托管平台 从自建到删除

目前开源的代码托管平台的选择有
1. [Gitea](https://github.com/go-gitea/)/[Gogs](https://github.com/gogs/gogs)
2. [GitLab](https://gitlab.com/gitlab-org/gitlab)
   1. CE免费
   2. EE在DevOps定价策略中有免费的个人版

Gitea 比 GitLab 占用更少的 CPU 此外Gitea还有[中文官网](https://gitea.io/zh-cn/)

可以参考 Gitea 的官方对比 : <https://docs.gitea.io/zh-cn/comparison/>

> 从安装角度来说 因为Gitea是Go项目 所以到处都可以安装 但GitLab-CE是Ruby-on-Rails项目 没有Windows版本
> 但都可以***Docker***

## 安装

:::tip 各发行版直接安装
Gitea : <https://docs.gitea.io/en-us/install-from-package/>
GitLab: <https://about.gitlab.com/install/?version=ce#official-linux-package>
:::

我个人还是比较推荐个人用户试玩的时候使用Docker
:::tip Docker/Kubernetes安装
| | Gitea | GitLab |
| Docker Compose | <https://docs.gitea.io/en-us/install-with-docker/> | <https://docs.gitlab.com/ee/install/docker.html> |
| Kubernetes | <https://docs.gitea.io/en-us/install-on-kubernetes/> | <https://docs.gitlab.com/charts/> |
:::