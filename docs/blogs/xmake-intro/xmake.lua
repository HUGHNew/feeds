-- 我是行注释
add_rules("mode.debug", "mode.release") -- 设置模式 debug和release
target("xm-test") -- 目标名(target)
    set_kind("static") -- 目标类型 静态库 具体见:<https://xmake.io/#/zh-cn/manual/project_target?id=targetset_kind>
    add_includedirs("include") -- 头文件路径 相当于 `gcc -I`
    set_targetdir("lib") -- 生成文件路径 相当于 `-o lib/libxm-test.a`
    add_files("src/hello.cpp") -- 添加源文件
target_end() -- 可选的target结束标识
target("main")
    set_kind("binary") -- 二进制
    add_includedirs("include")
    add_files("main.cpp")
    set_targetdir("bin")
    add_deps("xm-test") -- 添加库