AFRAME.registerComponent("marvel", {
    init: function () {
      this.placesContainer = this.el;   
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "marvel",
          title: "comic of marvel",
          url: "assets/marvel.jpg",
        },
        {
          id: "marvel1",
          title: "The best of marvel",
          url: "assets/marvel2.jpg",
        },
  
        {
          id: "marvel2",
          title: "the real heroes",
          url: "assets/marvel 1.jpg",
        },
        {
          id: "ironman",
          title: "IRON MAN",
          url: "assets/marvel4.jpg",
        },
      ];
      
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;


        const borderEl = this.createBorder(position, item.id);
  
         // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
        
      });
      
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "#0077CC",
        opacity: 1,
      });
    entityEl.setAttribute("cursor-listener",{})
     return entityEl
    },
    
      createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "circle",
          radius: 9,
        });
        entityEl.setAttribute("material", { src: item.url });
       console.log(item.url)
        return entityEl;
      },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "centre",
        width: 50,
        color: "#F70606",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    
    
    },
    
  });
  