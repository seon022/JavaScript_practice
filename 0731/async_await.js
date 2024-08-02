// async function sayHello() {
//   return "안녕";
// }

// let sayHello = async () => {
//   return "안녕";
// };

// sayHello().then(console.log);

// class Greeter {
//   async sayHello() {
//     return "안녕";
//   }
// }
// const greeter = new Greeter();
// greeter.sayHello().then(console.log);

async function sayHello() {
  return Promise.resolve("안녕");
}
sayHello().then(console.log);

async function sayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("안녕");
    });
  });
}
sayHello().then(console.log);

async function sayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("안녕");
    }, 1000);
  });
}
async function display() {
  try {
    let result = await sayHello();
    console.log(result);
    // sayHello 완료될때까지 기다렸다가 결과 반환
  } catch (e) {
    console.log(e);
  }
}
display();

// let success = true;
// function getUser() {
//   return new Promise((resolve, reject) => {
//     if (success) {
//       setTimeout(() => {
//         resolve([
//           { name: "Kim", email: "kim@gmail.com" },
//           { name: "Lee", email: "lee@gmail.com" },
//           { name: "kang", email: "kang@gmail.com" },
//         ]);
//       }, 1000);
//     }
//   });
// }
// function findUser(users, name) {
//   return new Promise((resolve, reject) => {
//     console.log(users);
//     setTimeout(() => {
//       resolve(users.find((user) => user.name === name));
//     }, 2000);
//   });
// }
// function getEmail(user) {
//   return new Promise((resolve, reject) => {
//     console.log(user);
//     setTimeout(() => {
//       resolve(user.mail);
//       console.log(user.mail);
//     }, 3000);
//   });
// }
// async function getUserEmail(name) {
//   let users = await getUser();
//   let user = await findUser(users, name);
//   let email = await getEmail(user);
//   console.log(email);
//   return email;
// }
// async function displayUserEmail() {
//   let email = await getUserEmail("Kim");
//   console.log(email);
// }
// displayUserEmail();

// 제너레이터------------------------------

// const myPromise = () =>
//   new Promise((resolve) => {
//     resolve("value is");
//   });

// function* gen() {
//   let result = "";
//   yield myPromise().then((data) => {
//     result = data;
//   });
//   yield result + 1;
// }

// const asyncFunc = gen();
// const val1 = asyncFunc.next();
// console.log(val1);

// val1.value.then(() => {
//   console.log(asyncFunc.next());
// });

// 모르겠어용
// async function* asyncSequence(
//   from = 0,
//   to = Infinity,
//   interval = 1,
//   timeout = 1000
// ) {
//   let next = from;
//   while (next <= to) {
//     yield new Promise((resolve, reject) => {
//       setTimeout(() => resolve(next), timeout);
//     });
//     next += interval;
//   }
// }
// (async () => {
//   let seq = asyncSequence(2, 10, 2);
//   for await (let value of seq) console.log(value);
// })();

// 예제------------------------------------------------------------

// async function* asyncSequence(numTasks, interval = 2000) {
//   for (let i = 1; i <= numTasks; i++) {
//     yield new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`작업${i}`);
//       }, interval);
//     });
//   }
// }

// (async () => {
//   const numTasks = 5; // 예시로 5개의 작업을 실행
//   const seq = asyncSequence(numTasks);
//   for await (let value of seq) {
//     // 각 작업의 결과가 출력됩니다.
//     console.log(value);
//   }
// })();

// async function* asyncSequence(taskNum, interval = 2000) {
//   for (let i = 1; i <= taskNum; i++) {
//     yield new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`작업${i}`);
//       }, interval);
//     });
//   }
// }
// (async () => {
//   const taskNum = 5;
//   const seq = asyncSequence(taskNum);
//   for await (let value of seq) {
//     console.log(value);
//   }
// })();

// 예제-풀이-----------------------------------------------------------
// function* taskGenerator() {
//   yield new Promise((resolve) => setTimeout(() => resolve("1완료"), 2000));
//   yield new Promise((resolve) => setTimeout(() => resolve("1완료"), 2000));
//   yield new Promise((resolve) => setTimeout(() => resolve("1완료"), 2000));
// }

// const taskDisplay = async () => {
//   const tasks = taskGenerator();
//   for (let task of tasks) {
//     const result = await task;
//     console.log(result);
//   }
// };
// taskDisplay();

// 예제1---------------------------------
// 사용자정보 가져오는 비동기함수 작성. 호출.
const users = {
  1: { name: "Kim", age: 25 },
  2: { name: "Lee", age: 30 },
  3: { name: "Jung", age: 35 },
};

async function getUser(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 사용자를 이름으로 검색
      const user = Object.values(users).find((user) => user.name === name);
      if (user) {
        resolve(user);
      } else {
        reject(new Error("없음"));
      }
    }, 1000);
  });
}

async function display(name) {
  try {
    let result = await getUser(name);
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
}

// 예시로 Kim이라는 이름을 사용하여 display를 호출
// display("Kim");

// 사용자의 이름을 넣어서 호출했을때, 해당 요소 출력되게 하기.
// 사용자들 중에 그 사용자 정보를 get하고 나서
// await는 말그대로 프라미스가 처리될때까지 함수 실행을 기다리게 함. 프라미스 처리되면 그 결과와 함께 실행이 재개됨. 프라미스가 처리되길 기다리는 동안 엔진이 다른일 할 수 있음.

// 예제1 푸리---------------
function UserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { name: "Kim", age: 25 },
        2: { name: "Lee", age: 30 },
        3: { name: "Jung", age: 35 },
      };
      const user = users[userId];
      if (user) {
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
}

async function getUser(userId) {
  try {
    const getUserData = await UserData(userId); // await 추가
    console.log(`${getUserData.name}, ${getUserData.age}`); // 속성 접근 수정
  } catch (error) {
    console.error(error.message); // 에러 메시지 출력
  }
}

// 예시로 사용자 ID 1에 해당하는 사용자 정보를 가져옴
getUser(1);
