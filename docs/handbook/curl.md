# curl

> transfer a URL

## 网络请求

- `-X` 指定协议方法
- `-H` 指定header字段
- `--data` 指定payload

```bash
curl -X POST -H 'Content-Type: application/json' --data '{
  "id":"123","passwd":"123"
}' ip_addr
```

```bash
curl -X GET ip_addr
```