# Morning Lab — 휴대폰 학습 앱

PC를 켜둘 필요 없이 GitHub Pages에서 사용하는 설치형 웹앱입니다.

## 처음 배포하기
1. 이 폴더의 내용을 GitHub 저장소 루트에 올리세요. `public`과 `.github` 폴더가 저장소 바로 아래에 있어야 합니다. ZIP 자체를 올리지 마세요.
2. 기본 브랜치는 `main`을 사용하세요.
3. GitHub 저장소의 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택하세요.
4. **Actions → Check and deploy Morning Lab → Run workflow**를 실행하세요. 이후 `main`에 올리는 변경은 자동 검사 후 배포됩니다.
5. 완료된 실행의 `github-pages` 주소를 휴대폰 브라우저로 여세요.
6. iPhone Safari는 공유 → 홈 화면에 추가, Android Chrome은 메뉴 → 앱 설치 또는 홈 화면에 추가를 이용하세요. 메뉴 명칭은 브라우저 버전에 따라 다를 수 있습니다.

GitHub Free는 공개 저장소의 Pages를 지원합니다. 일반 GitHub Pages 사이트는 공개되며 앱 코드와 문제집을 방문자가 볼 수 있습니다. 개인 학습 기록이나 인증정보는 이 저장소에 포함하지 마세요.

## 기능과 저장
- 역사 108문제, 사자성어 140개, 영어, 스피치, AI 리터러시, Python 25단계.
- 기록은 각 기기·브라우저의 IndexedDB에 저장되며 자동 동기화되지 않습니다. 설정에서 백업을 내려받고 가져올 수 있습니다. PC판 기록도 백업 파일로 가져올 수 있습니다.
- 브라우저 데이터 삭제 시 기록도 삭제됩니다. 주기적으로 백업하세요.
- AI 질문은 수업 맥락과 함께 복사한 뒤 본인의 ChatGPT에 붙여넣습니다. 내장 AI 답변 서버나 유료 API 호출은 없습니다.
- Python은 번들된 Pyodide를 사용하여 브라우저 안에서 실행합니다. 런타임 원본 라이선스는 public/runtime/LICENSE에 있습니다.
- 업데이트는 온라인으로 다시 앱을 열거나 새로고침하면 적용됩니다. 배포 시 기존 기기 기록은 초기화하지 않습니다.

## 개발
`node scripts/check.mjs`로 배포 전 검사합니다. 앱은 `public`에 있습니다. 저장소 이름이나 사용자 사이트 주소에 관계없이 상대 경로를 사용합니다.

GitHub 설정과 업로드가 끝나기 전에는 실제 배포되지 않습니다.
