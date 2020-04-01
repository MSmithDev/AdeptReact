export const test = 'ADDTASK';
export const start = 'STARTTASKEXECUTION';
export const stop = 'STOPTASKEXECUTION';
export const pause = 'PAUSETASKEXECUTION';

export function ADDTASK() {
  return {
    type: test
  };
}

export function STARTTASKEXECUTION() {
  return {
    type: start
  };
}

export function STOPTASKEXECUTION() {
  return {
    type: stop
  };
}

export function PAUSETASKEXECUTION() {
  return {
    type: pause
  };
}
