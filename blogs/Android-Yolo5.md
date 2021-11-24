# Yolov5-Android初体验

## 框架和环境

两个可用demo程序

1.   ncnn框架的[demo](https://github.com/nihui/ncnn-android-yolov5/)
2.   PyTorch官方[demo](https://github.com/pytorch/android-demo-app/tree/master/ObjectDetection)

本文基于ncnn框架的demo进行尝试使用

## 实际操作

clone [YoloV5 demo project](https://github.com/nihui/ncnn-android-yolov5/)

下载 [vulkan](https://github.com/Tencent/ncnn/releases)

两者解压之后 记住两者的位置

用Android Studio打开demo项目

下载需要的组件(Tools->SDK Manager->SDK Tools)

- SDK:29.0.2
- NDK:21.0.6113669(我下的这个 更新的应该也行)
- Android Platform 24
- cmake 3.10 (也许需要单独下载 **ninja**)

```cmake
# I don't extract the vulkan to `cpp/include/`
set(Vulkan ../../../../../ncnn-20210720-android-vulkan/)
set(ncnn_DIR ${CMAKE_SOURCE_DIR}/${Vulkan}/${ANDROID_ABI}/lib/cmake/ncnn)
```

then you can add `x86` support for avd in build.gradle

```gradle
ndk {
        moduleName "ncnn"
        abiFilters "armeabi-v7a", "arm64-v8a","x86" // add "x86"
    }
```



重新打开一下AS 打开avd就能跑起来了

## 模型转换

pt --(官方export.py)->onnx--(onnxsim)->sim-onnx--(ncnn官方提供onnx2ncnn)-->ncnn(.bin/.param)

ncnn官方连接<https://github.com/Tencent/ncnn/wiki/use-ncnn-with-pytorch-or-onnx>



### 具体操作

1.   `python export.py --weight _wt`
2.   [`python -m onnxsim _model.onnx _model-sim.onnx`]
3.   `python onnx2ncnn _.onnx`

[原文地址](https://github.com/HughClub/YoloV5-Android)
