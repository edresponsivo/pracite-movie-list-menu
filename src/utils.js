const checkGenre = (generosArr) => {
  // console.log(generosArr);
  const generos = generosArr.map((generoNum) => {
    switch (generoNum) {
      case 18:
        return "drama";
        break;
      case 80:
        return "crime";
        break;
      case 35:
        return "comedy";
        break;
      case 16:
        return "animation";
        break;
      case 10751:
        return "family";
        break;
      case 12:
        return "adventure";
        break;
      case 14:
        return "fantasy";
        break;
      case 36:
        return "history";
        break;
      case 10752:
        return "war";
        break;
      case 10749:
        return "romance";
        break;
      case 53:
        return "action";
        break;
      case 28:
        return "thriller";
        break;
      case 37:
        return "western";
        break;
      default:
        return generoNum;
    }
  });
  return generos;
};

const getGenreWID = (generosArr) => {
  // console.log(generosArr);
  const generos = generosArr.map((generoNum) => {
    switch (generoNum) {
      case 18:
        return { id: 18, text: "drama" };
        break;
      case 80:
        return { id: 80, text: "crime" };
        break;
      case 35:
        return { id: 35, text: "comedy" };
        break;
      case 16:
        return { id: 16, text: "animation" };
        break;
      case 10751:
        return { id: 10751, text: "family" };
        break;
      case 12:
        return { id: 12, text: "adventure" };
        break;
      case 14:
        return { id: 14, text: "fantasy" };
        break;
      case 36:
        return { id: 36, text: "history" };
        break;
      case 10752:
        return { id: 10752, text: "war" };
        break;
      case 10749:
        return { id: 10749, text: "romance" };
        break;
      case 53:
        return { id: 53, text: "action" };
        break;
      case 28:
        return { id: 28, text: "thriller" };
        break;
      case 37:
        return { id: 37, text: "western" };
        break;
      default:
        return generoNum;
    }
  });
  return generos;
};

export { checkGenre, getGenreWID };
