# crontab

> 定时任务启动时的 workdir 为用户家目录

> [参考](https://www.gairuo.com/p/cron-expression-sheet)

具体格式参照 `crontab -e` 时的系统提示格式 如Ubuntu:`# m h  dom mon dow   command`

```bash
# 格式是：分 时 日 月 星期 要运行的命令
# week (0 - 6) = sun,mon,tue,wed,thu,fri,sat
# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,...,sat
# |  |  |  |  |
# *  *  *  *  * user-name command to be executed
```

## usage

```
usage:  crontab [-u user] file
        crontab [ -u user ] [ -i ] { -e | -l | -r }
                (default operation is replace, per 1003.2)
        -e      (edit user's crontab)
        -l      (list user's crontab)
        -r      (delete user's crontab)
        -i      (prompt before deleting user's crontab)
```

## tldr

```bash
crontab
Schedule cron jobs to run on a time interval for the current user.Job definition format: "(min) (hour) (day_of_month) (month) (day_of_week) command_to_execute".More information: https://manned.org/crontab.

 - Edit the crontab file for the current user:
   crontab -e

 - Edit the crontab file for a specific user:
   sudo crontab -e -u {{user}}

 - Replace the current crontab with the contents of the given file:
   crontab {{path/to/file}}

 - View a list of existing cron jobs for current user:
   crontab -l

 - Remove all cron jobs for the current user:
   crontab -r

 - Sample job which runs at 10:00 every day (* means any value):
   0 10 * * * {{command_to_execute}}

 - Sample job which runs every minute on the 3rd of April:
   * * 3 Apr * {{command_to_execute}}

 - Sample job which runs a certain script at 02:30 every Friday:
   30 2 * * Fri {{/absolute/path/to/script.sh}}
```