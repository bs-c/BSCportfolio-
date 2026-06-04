import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

// 1. 取得所有文章列表 (用於 Blog 首頁)
export function getSortedPostsData() {
  // 讀取資料夾內所有檔名
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // 移除 ".md" 副檔名當作 ID (slug)
    const id = fileName.replace(/\.md$/, "");

    // 讀取檔案內容
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 使用 gray-matter 解析 metadata
    const matterResult = matter(fileContents);

    // 回傳 id 與 metadata
    return {
      id,
      ...matterResult.data,
    };
  });

  // 依照日期排序 (新的在前面)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 2. 取得單篇文章內容 (用於文章內頁)
export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    return null; // 如果找不到檔案，回傳 null，不要讓程式當機
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // 解析 metadata 與 內容
  const { data, content } = matter(fileContents);

  return {
    id,
    content, // 這是純 Markdown 文字
    ...data, // 這是 title, date 等資訊
  };
}
