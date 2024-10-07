//varför man ska använda en template i javascript.
// Dynamisk hantering: Du kan enkelt lägga till eller ta bort element utan att duplicera HTML-kod.
// Återanvändbarhet: Du kan skapa en återanvändbar funktion för att generera dessa element.
// Bättre kodstruktur: Genom att separera logik och markup kan du hålla koden renare.

// creating project container and it's inside
export function createProjectContainer(project) {
   // create main project container
   const projectContainer = document.createElement("div");
   projectContainer.classList.add("project-container");
   //create content container
   const contentContainer = document.createElement("div");
   contentContainer.classList.add("project-content-container");
   //create overlay div
   const overlay = document.createElement("div");
   overlay.classList.add("overlay");
   //create img container
   const projectImg = document.createElement("div");
   projectImg.classList.add("project-img");

   // create img-element
   const imgElement = document.createElement("img");
   imgElement.classList.add("image-element");
   imgElement.src = project.imgSrc;
   projectImg.appendChild(imgElement);

   //create webassets container
   const webAssets = document.createElement("div");
   webAssets.classList.add("web-assets");
   //
   project.technologies.forEach((tech) => {
      const assetDiv = document.createElement("div");
      assetDiv.textContent = tech;
      webAssets.appendChild(assetDiv);
   });

   contentContainer.appendChild(overlay);
   contentContainer.appendChild(projectImg);
   contentContainer.appendChild(webAssets);
   projectContainer.appendChild(contentContainer);

   // create description container (expanded part)

   const descriptionContainer = document.createElement("div");
   descriptionContainer.classList.add("project-description-container");
   console.log(descriptionContainer);

   const projectHeaderContainer = document.createElement("div");
   projectHeaderContainer.classList.add("project-header-container");

   descriptionContainer.appendChild(projectHeaderContainer);

   //create project heading
   const projectName = document.createElement("h1");
   projectName.classList.add("project-name");
   projectName.textContent = project.name;

   projectHeaderContainer.appendChild(projectName);

   //create container for link and img
   const githubLinkContainer = document.createElement("div");
   githubLinkContainer.classList.add("githublink-container");

   //create link to gitHub
   const githubLink = document.createElement("a");
   githubLink.classList.add("github-link");
   githubLink.setAttribute("href", project.githubLink);
   githubLink.setAttribute("target", "_blank");

   const gitHubIcon = document.createElement("img");
   gitHubIcon.setAttribute("src", "./images/GithubBlack.png");
   gitHubIcon.setAttribute("alt", "github link");
   gitHubIcon.classList.add("github-icon");

   githubLink.appendChild(gitHubIcon);
   githubLinkContainer.appendChild(githubLink);
   projectHeaderContainer.appendChild(githubLinkContainer);

   //create webassets container
   const webAssetsCopy = document.createElement("div");
   webAssetsCopy.classList.add("web-assets-copy");

   project.technologies.forEach((tech) => {
      const assetDiv = document.createElement("div");
      assetDiv.textContent = tech;
      webAssetsCopy.appendChild(assetDiv);
   });

   descriptionContainer.appendChild(webAssetsCopy);

   //create project description textcontent container
   const description = document.createElement("div");
   description.classList.add("description");

   // create heading for section of description titel
   const descriptionTitel = document.createElement("h3");
   descriptionTitel.classList.add("small-heading");
   descriptionTitel.textContent = "Project description";

   //create paragraph for text content
   const descriptionText = document.createElement("p");
   descriptionText.classList.add("description-paragraph");
   descriptionText.textContent = project.description;

   // create heading for section of reflections titel
   const reflectionTitel = document.createElement("h3");
   reflectionTitel.classList.add("small-heading");
   reflectionTitel.textContent = "Reflections";

   //create paragraph for text content
   const reflectionText = document.createElement("p");
   reflectionText.classList.add("description-paragraph");
   reflectionText.textContent = project.reflections;

   // create heading for section of gained knowledge titel
   const gainedKnowledgeTitel = document.createElement("h3");
   gainedKnowledgeTitel.classList.add("small-heading");
   gainedKnowledgeTitel.textContent = "Gained knowlegde";

   //create paragraph for text content
   const gainedKnowledgeText = document.createElement("p");
   gainedKnowledgeText.classList.add("description-paragraph");
   gainedKnowledgeText.textContent = project.gainedKnowledge;

   description.appendChild(descriptionTitel);
   description.appendChild(descriptionText);
   description.appendChild(reflectionTitel);
   description.appendChild(reflectionText);
   description.appendChild(gainedKnowledgeTitel);
   description.appendChild(gainedKnowledgeText);

   descriptionContainer.appendChild(description);

   projectContainer.appendChild(descriptionContainer);
   return projectContainer;
}

// function for creating other projects

export function createOtherProjectContainer(project) {
   // create main project container
   const projectContainer = document.createElement("div");
   projectContainer.classList.add("project-container");
   projectContainer.id = "size-ajustments";
   //create content container
   const contentContainer = document.createElement("div");
   contentContainer.classList.add("project-content-container");
   //create overlay div
   const overlay = document.createElement("div");
   overlay.classList.add("overlay");
   //create img container
   const projectImg = document.createElement("div");
   projectImg.classList.add("project-img");

   // create img-element
   const imgElement = document.createElement("img");
   imgElement.classList.add("image-element");
   imgElement.id = "element-size-adjustment";
   imgElement.src = project.imgSrc;
   projectImg.appendChild(imgElement);

   //create webassets container
   const webAssets = document.createElement("div");
   webAssets.classList.add("web-assets");
   //
   project.technologies.forEach((tech) => {
      const assetDiv = document.createElement("div");
      assetDiv.textContent = tech;
      webAssets.appendChild(assetDiv);
   });

   contentContainer.appendChild(overlay);
   contentContainer.appendChild(projectImg);
   contentContainer.appendChild(webAssets);
   projectContainer.appendChild(contentContainer);

   //project description container

   const descriptionContainer = document.createElement("div");
   descriptionContainer.classList.add("project-description-container");
   console.log(descriptionContainer);

   const projectHeaderContainer = document.createElement("div");
   projectHeaderContainer.classList.add("project-header-container");

   descriptionContainer.appendChild(projectHeaderContainer);

   //create project heading
   const projectName = document.createElement("h1");
   projectName.classList.add("project-name");
   projectName.textContent = project.name;

   projectHeaderContainer.appendChild(projectName);

   //create container for link and img
   const githubLinkContainer = document.createElement("div");
   githubLinkContainer.classList.add("githublink-container");

   //create link to gitHub
   const githubLink = document.createElement("a");
   githubLink.classList.add("github-link");
   githubLink.setAttribute("href", project.githubLink);
   githubLink.setAttribute("target", "_blank");

   const gitHubIcon = document.createElement("img");
   gitHubIcon.setAttribute("src", "./images/GithubBlack.png");
   gitHubIcon.setAttribute("alt", "github link");
   gitHubIcon.classList.add("github-icon");

   githubLink.appendChild(gitHubIcon);
   githubLinkContainer.appendChild(githubLink);
   projectHeaderContainer.appendChild(githubLinkContainer);

   //create webassets container
   const webAssetsCopy = document.createElement("div");
   webAssetsCopy.classList.add("web-assets-copy");

   project.technologies.forEach((tech) => {
      const assetDiv = document.createElement("div");
      assetDiv.textContent = tech;
      webAssetsCopy.appendChild(assetDiv);
   });

   descriptionContainer.appendChild(webAssetsCopy);

   //create project description textcontent container
   const description = document.createElement("div");
   description.classList.add("description");

   // create heading for section of description titel
   const descriptionTitel = document.createElement("h3");
   descriptionTitel.classList.add("small-heading");
   descriptionTitel.textContent = "Project description";

   //create paragraph for text content
   const descriptionText = document.createElement("p");
   descriptionText.classList.add("description-paragraph");
   descriptionText.textContent = project.description;

   description.appendChild(descriptionTitel);
   description.appendChild(descriptionText);

   return projectContainer;
}
