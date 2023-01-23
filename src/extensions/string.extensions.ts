declare global {
  interface String {
    capitalize(): string;
  }
}

if (!String.prototype.capitalize) {
  String.prototype.capitalize = function () {
    const words = this.split(" ");

    words.forEach((word, index) => {
      words[index] = word.charAt(0).toUpperCase() + words[index].substring(1);
    });

    return words.join(" ");
  };
}

export {};
