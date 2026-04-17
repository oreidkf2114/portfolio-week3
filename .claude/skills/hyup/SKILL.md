---
name: hyup
description: 이 스킬을 사용하면 포트폴리오에 대한 정보를 얻을 수 있음
---

# hyup
이 스킬을 사용하면 포트폴리오에 대한 정보를 얻을 수 있습니다 포트폴리오의 이름, 설명, URL, 이미지 URL, 그리고 태그를 포함한 다양한 정보를 반환합니다. 이 스킬은 포트폴리오의 세부 사항을 확인하거나 업데이트할 때 유용하게 사용할 수 있습니다.

## 사용 예시
```json
{
  "portfolio": {
    "name": "My Portfolio",
    "description": "A collection of my projects and achievements.",
    "url": "https://myportfolio.com",
    "image_url": "https://myportfolio.com/image.png",
    "tags": ["web development", "design", "photography"]
  }
}

## 실행 순서

1. 사용자의 포트폴리오에 대한 정보를 수집한다.
2. 수집한 정보를 기반으로 정리해서 깔끔하게 사용자에게 알려준다. 