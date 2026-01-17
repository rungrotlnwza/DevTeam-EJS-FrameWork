# DevTeam Framework 2

DevTeam Framework 2 คือเฟรมเวิร์กสำหรับพัฒนาเว็บด้วย **Node.js (Express + EJS Layouts)**  
ออกแบบมาเพื่อรองรับการพัฒนาเว็บแบบ **Single Port** โดยรวมทั้ง Frontend และ Backend ไว้ในเซิร์ฟเวอร์เดียว

เฟรมเวิร์กนี้เหมาะสำหรับผู้ที่ต้องการพัฒนาเว็บด้วย **HTML, CSS และ JavaScript แบบดั้งเดิม**  
โดยไม่ต้องพึ่ง Frontend Framework ขนาดใหญ่ เช่น Vue หรือ React

---

## แนวคิดและที่มา

การพัฒนาเว็บในปัจจุบันมักมีความซับซ้อนมากเกินความจำเป็น เช่น

- ต้องแยก Port ระหว่าง Frontend และ Backend
- ต้องตั้งค่า Proxy และจดจำ Absolute Path
- ใช้ทรัพยากรเครื่องสูง
- ไม่เหมาะกับโปรเจกต์ขนาดเล็กถึงกลาง

ในขณะเดียวกัน การใช้ EJS แบบดั้งเดิมก็มีข้อจำกัด เช่น

- ต้อง include layout ซ้ำในทุกหน้า
- โครงสร้างไฟล์ขยายยาก

DevTeam Framework 2 ถูกพัฒนาขึ้นเพื่อแก้ปัญหาเหล่านี้  
โดยเน้น **ความเรียบง่าย**, **Developer Experience**, และ **การจัดการโครงสร้างที่ชัดเจน**

---

## Features

- ใช้ **Port เดียว** สำหรับทั้ง Frontend และ Backend
- Express + EJS พร้อมระบบ Layout
- รองรับ Layout และ Partial ส่วนกลาง
- ใช้ Relative Path ในการอ้างอิงไฟล์
- Live Reload สำหรับการพัฒนา
- โครงสร้างโปรเจกต์เข้าใจง่าย
- เหมาะสำหรับเว็บแบบ Multi-page

---

## Technology Stack

- Node.js
- Express.js
- EJS
- express-ejs-layouts
- livereload
- connect-livereload

---

## Installation

### Requirements

- Node.js v16 ขึ้นไป
- npm

### Install

```bash
npm install
```

---

## Environment Variables

โปรเจกต์นี้ใช้ไฟล์ `.env` สำหรับการตั้งค่าพฤติกรรมของระบบ
ก่อนเริ่มใช้งาน ให้คัดลอกไฟล์ `example.env` และเปลี่ยนชื่อเป็น `.env`

```bash
cp example.env .env
```

จากนั้นสามารถปรับค่าต่าง ๆ ได้ตามต้องการ

### Available Variables

| Variable   | Description               | Default |
| ---------- | ------------------------- | ------- |
| PORT       | พอร์ตสำหรับรันเซิร์ฟเวอร์ | 3000    |
| LIVERELOAD | เปิดหรือปิด Live Reload   | true   |

---

### Live Reload

DevTeam Framework 2 รองรับ Live Reload สำหรับการพัฒนา
หากต้องการปิดใช้งาน ให้ตั้งค่าในไฟล์ `.env`

```env
LIVERELOAD=true
```

เมื่อเปิดใช้งาน ระบบจะรีเฟรชหน้าเว็บอัตโนมัติเมื่อมีการแก้ไขไฟล์
เหมาะสำหรับการพัฒนา Frontend โดยไม่ต้องรีสตาร์ทเซิร์ฟเวอร์

> หมายเหตุ: Live Reload ถูกออกแบบมาเพื่อใช้งานในโหมด Development เท่านั้น

ดูรายละเอียดเพิ่มเติมเกี่ยวกับการทำงานของ Live Reload ได้ที่ `docs/livereload.md`

---

## Running the Project

### Development Mode

```bash
npm run dev
```

เซิร์ฟเวอร์จะรันที่:

```
http://localhost:3000s
```

---

## Routing Concept

DevTeam Framework 2 ใช้ Router กลางเพื่อรวมเส้นทางทั้งหมดของระบบ
โดยแยกโครงสร้างระหว่าง Frontend และ Backend อย่างชัดเจน

แนวคิดหลัก:

- Entry point จะ mount router หลักเพียงครั้งเดียว
- Router หลักทำหน้าที่รวม frontend และ backend routes
- Frontend routes รับผิดชอบการ render view และ layout

---

## Example Frontend Route

ตัวอย่างการสร้าง Frontend Route
โดยกำหนด view และ layout แบบ explicit ด้วย Relative Path

```js
router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../../../views/page/index.ejs"), {
    layout: path.join(__dirname, "../../../views/layouts/main.layout.ejs"),
  });
});
```

ตัวอย่างและแนวทางการจัดการ Routing เพิ่มเติมอยู่ที่ `docs/routing.md`

---

## Project Structure

```text
project-root/
├─ src/
│  ├─ backend/
│  │  └─ routes/
│  ├─ frontend/
│  │  └─ routes/
│  ├─ views/
│  │  ├─ layouts/
│  │  └─ page/
│  └─ public/
│     ├─ css/
│     ├─ js/
│     └─ images/
├─ app.js
├─ index.js
├─ example.env
├─ package.json
└─ README.md
```

---

## เหมาะสำหรับใคร

- ผู้ที่ต้องการใช้ HTML / CSS / JS แบบดั้งเดิม
- โปรเจกต์ขนาดเล็กถึงกลาง
- เว็บแบบ Multi-page
- ผู้ที่ไม่ต้องการใช้ SPA หรือ Frontend Framework
- ผู้ที่ต้องการ Framework ที่มี Convention ชัดเจน

---

## License

MIT License

---

## การตั้งค่าระบบ

### ขั้นตอนที่ 1: Clone โปรเจกต์
Clone repository สำหรับโปรเจกต์ของคุณ:

```bash
git clone https://github.com/rungrotlnwza/mywebframwork.git
```

เข้าสู่โฟลเดอร์โปรเจกต์:

```bash
cd mywebframwork
```

### ขั้นตอนที่ 2: ติดตั้ง Dependencies
ติดตั้ง dependencies ที่จำเป็น:

```bash
npm install
```

### ขั้นตอนที่ 3: ตั้งค่า Git Remotes
เพื่อให้การอัปเดตและการทำงานเป็นไปอย่างถูกต้อง ให้ตั้งค่า Git remotes ดังนี้:

1. เพิ่ม repository ของ framework เป็น remote ชื่อ `framework`:

   ```bash
   git remote add framework https://github.com/rungrotlnwza/DevTeam-EJS-FrameWork.git
   ```

2. ตรวจสอบ remotes:

   ```bash
   git remote -v
   ```

   คุณควรเห็นผลลัพธ์ดังนี้:

   ```
   origin    https://github.com/rungrotlnwza/mywebframwork.git (fetch)
   origin    https://github.com/rungrotlnwza/mywebframwork.git (push)
   framework https://github.com/rungrotlnwza/DevTeam-EJS-FrameWork.git (fetch)
   framework https://github.com/rungrotlnwza/DevTeam-EJS-FrameWork.git (push)
   ```

### ขั้นตอนที่ 4: อัปเดต Framework
เพื่อดึงการอัปเดตล่าสุดจาก repository ของ framework ให้รันคำสั่ง:

```bash
npm run update
```

คำสั่งนี้จะดึงการเปลี่ยนแปลงล่าสุดจาก remote `framework` มาใช้งาน

### ขั้นตอนที่ 5: Push งานของคุณ
เพื่อส่งการเปลี่ยนแปลงไปยัง repository โปรเจกต์ของคุณ ให้ใช้คำสั่ง:

```bash
git push origin main
```

---
