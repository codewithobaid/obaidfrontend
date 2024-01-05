const url = "https://api.github.com/users";

const searchinputEl = document.getElementById("InputSearch");
const searchbuttonEl = document.getElementById("searchbtn");
const profileContainerEl = document.getElementById("profileContainer");
const loadingEl = document.getElementById("loading");

const generateProfile = (profile) => {
  return `<div class="profile-box card">
    <div class="top-section">
      <div class="avatar">
        <img src= "${profile.avatar_url}"/>
        <div class="user-name">
          <h1>${profile.name}</h1>
          <h2>@${profile.login}</h2>
        </div>
      </div>
      <a href="${profile.html_url}" target="_black">
      <div class="check-btn">
        <button>
          <span>Check Profile</span>
        </button>
      </div>
      </a>
    </div>
    <div class="about">
      <h2>About</h2>
      <h3>${profile.bio}</h3>
    </div>
    <div class="status">
      <div class="s-items">
        <h3>Followers</h3>
        <h3>${profile.followers}</h3>
      </div>
      <div class="s-items">
        <h3>Following</h3>
        <h3>${profile.following}</h3>
      </div>
      <div class="s-items">
        <h3>Repository</h3>
        <h3>${profile.public_repos}</h3>
      </div>
    </div>
  </div>`;
};

const FetchProfile = async () => {
  const username = searchinputEl.value;

  loadingEl.innerText = "loading....";
  loadingEl.style.color = "blue";

  try {
    const res = await fetch(`${url}/${username}`);
    const data = await res.json();

    if (data.bio) {
      loadingEl.innerText = "";
      profileContainerEl.innerHTML = generateProfile(data);
    } else {
      loadingEl.innerHTML = data.message;
      loadingEl.style.color = "black";
      profileContainerEl.innerText = "";
    }
  } catch (error) {
    console.log({ error });
    loadingEl.innerText = "";
  }
};

searchbuttonEl.addEventListener("click", FetchProfile);
