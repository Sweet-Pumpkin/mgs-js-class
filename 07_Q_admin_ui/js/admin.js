// 대시보드
const openBtn = document.querySelector(".dash_open");
const dashboard = document.querySelector(".dashboard");
const closeBtn = document.querySelector(".dash_close");

// 포지션 fix
const contents = document.querySelector(".contents");
const schArea = document.querySelector(".sch_area");
const funcArea = document.querySelector(".func_area");

// 체크박스
const optElem = document.querySelector('#opt');
const taskElem = document.querySelector(".task_items");
const itemChecks = taskElem.querySelectorAll("input[type='checkbox']");

// 대시보드
function handleDashboard(e) {
  e.preventDefault();
  dashboard.classList.add("on");
}

function handleColse(e) {
  e.preventDefault();
  dashboard.classList.remove("on");
}

// 스크롤
function handleScroll(e) {
  const value = e.target.scrollTop;
  if (value > 170) {
    schArea.classList.add('fix');
    funcArea.classList.add('fix');
  } else {
    schArea.classList.remove('fix');
    funcArea.classList.remove('fix');
  }
}

// 체크박스
function allcheckWork(e) {
  if (e.target.checked) {
    itemChecks.forEach(item => {
      item.checked = true;
    });
  } else {
    itemChecks.forEach(item => {
      item.checked = false;
    });
  }
}

function checkCount() {
  
}

openBtn.addEventListener("click", handleDashboard);
closeBtn.addEventListener("click", handleColse);
contents.addEventListener("scroll", handleScroll);
optElem.addEventListener("click", allcheckWork);
taskElem.addEventListener("click", checkCount);