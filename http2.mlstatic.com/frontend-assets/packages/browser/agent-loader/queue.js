export class MainQueue {
  static queue = new Map();

  push(signal, payload) {
    if (MainQueue.queue.has(signal)) {
      MainQueue.queue.get(signal).push(payload);
    } else {
      MainQueue.queue.set(signal, [payload]);
    }
  }

  pop(signal) {
    if (MainQueue.queue.has(signal)) {
      const payloads = MainQueue.queue.get(signal);

      MainQueue.queue.delete(signal);

      return payloads;
    }

    return null;
  }

  hasData() {
    return MainQueue.queue.size > 0;
  }
}
