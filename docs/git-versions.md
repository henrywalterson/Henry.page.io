# Xem version cũ với Git

## 1. Xem danh sách commit

```bash
git log --oneline
```

Mỗi dòng: `<hash>  <message>` — hash 7 ký tự đầu là đủ dùng.

---

## 2. Xem nội dung 1 file tại commit cụ thể

```bash
git show <hash>:<đường dẫn file>
```

Ví dụ:

```bash
git show abc1234:public/css/home.css
git show abc1234:index.html
```

---

## 3. Xem tất cả thay đổi từ 1 commit đến hiện tại

```bash
git diff <hash> HEAD
```

Để lọc chỉ 1 file:

```bash
git diff <hash> HEAD -- public/css/home.css
```

---

## 4. Tạm thời quay về 1 commit cũ (để xem, không làm mất gì)

```bash
# Lưu thay đổi chưa commit (nếu có)
git stash

# Chuyển về commit cũ (detached HEAD — chỉ để xem)
git checkout <hash>

# Xem xong, quay về main
git checkout main

# Lấy lại thay đổi đã stash
git stash pop
```

---

## 5. Khôi phục 1 file cụ thể về version cũ

```bash
git checkout <hash> -- public/css/home.css
```

File trong working tree sẽ được ghi đè bằng version cũ. Sau khi xem/dùng xong, để quay lại version hiện tại:

```bash
git checkout HEAD -- public/css/home.css
```

---

## 6. Revert hoàn toàn về 1 commit (tạo commit mới, không xoá lịch sử)

```bash
# Xem commit hiện tại và commit muốn revert về
git log --oneline

# Revert tất cả commit từ <old-hash> đến HEAD
git revert --no-commit <old-hash>..HEAD
git commit -m "Revert to state at <old-hash>"
```

---

## Commits của portfolio này

Chạy `git log --oneline` để xem. Các mốc quan trọng thường là:

- Trước session cleanup → commit có message về hero animation cũ
- Trước khi bắt đầu chỉnh màu → commit có message "unify text colors"

Tip: dùng `git log --oneline --graph` để thấy cây commit dễ đọc hơn.
