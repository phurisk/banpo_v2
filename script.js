// ========================================
// หมวดหมู่: NAVIGATION & MENU (ระบบนำทางและเมนู)
// ========================================

/**
 * ฟังก์ชันสำหรับแสดง/ซ่อน dropdown ของการเลือกภาษา
 * ใช้ใน: เมนูเลือกภาษาหลักของเว็บไซต์
 */
function toggleLangDropdown() {
  const dropdown = document.getElementById("langDropdown")
  dropdown.classList.toggle("show")
}

/**
* ฟังก์ชันสำหรับเลื่อนดูบริการในส่วนของ Services Grid
* ใช้ใน: ส่วนแสดงบริการต่างๆ ที่สามารถเลื่อนดูได้
* @param {string} direction - ทิศทาง "left" หรือ "right"
*/
function scrollServices(direction) {
  const grid = document.getElementById("servicesGrid")
  const scrollAmount = 300

  if (direction === "left") {
      grid.scrollLeft -= scrollAmount
  } else {
      grid.scrollLeft += scrollAmount
  }
}

// ========================================
// หมวดหมู่: MEDIA & VIDEO CONTROLS (ควบคุมสื่อและวิดีโอ)
// ========================================

/**
 * ฟังก์ชันสำหรับเปลี่ยนวิดีโอ YouTube โดยใช้ dot navigation หรือปุ่ม prev/next
 * ใช้ใน: ส่วนแสดงวิดีโอที่มี dots สำหรับเปลี่ยนคลิป
 * @param {string} direction - ทิศทาง "next" หรือ "prev"
 */
function changeVideo(direction) {
  const dots = document.querySelectorAll(".video-dot");
  const videoPlayer = document.querySelector(".video-player");
  let currentActive = 0;

  // หาดัชนีของ dot ที่ active อยู่
  dots.forEach((dot, index) => {
      if (dot.classList.contains("active")) {
          currentActive = index;
          dot.classList.remove("active");
      }
  });

  // คำนวณดัชนีใหม่ตามทิศทาง
  if (direction === "next") {
      currentActive = (currentActive + 1) % dots.length;
  } else {
      currentActive = (currentActive - 1 + dots.length) % dots.length;
  }

  // อัปเดต active dot และเปลี่ยนวิดีโอ YouTube
  const newVideoUrl = dots[currentActive].dataset.video;
  dots[currentActive].classList.add("active");
  videoPlayer.src = newVideoUrl;
  console.log(`Loading video: ${newVideoUrl}`);
}

/**
* ฟังก์ชันสำหรับเลือกวิดีโอโดยตรงเมื่อคลิกที่ dot
* @param {number} index - ดัชนีของ dot ที่ถูกคลิก
*/
function selectVideo(index) {
  const dots = document.querySelectorAll(".video-dot");
  const videoPlayer = document.querySelector(".video-player");

  // ลบ active จากทุก dot
  dots.forEach(dot => dot.classList.remove("active"));

  // เพิ่ม active ให้ dot ที่ถูกคลิก
  dots[index].classList.add("active");
  const newVideoUrl = dots[index].dataset.video;
  videoPlayer.src = newVideoUrl;
  console.log(`Selected video: ${newVideoUrl}`);
}





/**
* ฟังก์ชันสำหรับเปลี่ยนการแสดงข้อมูลติดต่อ (ยังไม่ได้ implement)
* ใช้ใน: ส่วน Contact section ที่อาจจะมีการแสดงข้อมูลติดต่อหลายแบบ
* @param {string} direction - ทิศทางการเลื่อน
*/
function changeContact(direction) {
  // Contact sliding functionality can be implemented here
  console.log("Contact slide:", direction)
}

// ========================================
// หมวดหมู่: TAB MANAGEMENT (การจัดการแท็บ)
// ========================================

/**
* ฟังก์ชันสำหรับสลับแท็บระหว่าง Activities และ News
* ใช้ใน: ส่วนหลักของหน้าเว็บที่มีแท็บให้เลือกดู
* @param {string} tabName - ชื่อแท็บ "activities" หรือ "news"
*/
function switchTab(tabName) {
  // Remove active class from all tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.remove("active")
  })

  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.add("hidden")
  })

  // Show selected tab content
  if (tabName === "activities") {
      document.getElementById("activitiesContent").classList.remove("hidden")
      document.querySelector(".tab-btn:first-child").classList.add("active")
  } else if (tabName === "news") {
      document.getElementById("newsContent").classList.remove("hidden")
      document.querySelector(".tab-btn:last-child").classList.add("active")
  }
}

/**
* ฟังก์ชันสำหรับสลับแท็บใน ECP section
* ใช้ใน: ส่วน ECP (อาจจะเป็น Economic/Education/Culture Program)
* @param {string} tabName - ชื่อแท็บที่ต้องการสลับไป
*/
function switchECPTab(tabName) {
  // Remove active class from all ECP tab buttons
  document.querySelectorAll(".ecp-tab").forEach((btn) => {
      btn.classList.remove("active")
  })

  // Add active class to clicked tab
  event.target.classList.add("active")

  // Here you can add logic to show different content based on the tab
  console.log("Switched to tab:", tabName)

  // You can implement different content for each tab here
  // For now, all tabs show the same content structure
}

/**
* ฟังก์ชันสำหรับสลับแท็บในส่วนขวาของเว็บไซต์
* ใช้ใน: Sidebar ขวาที่มีแท็บ Local และ Promotion
* @param {string} tabName - ชื่อแท็บ "local" หรือ "promotion"
*/
function switchRightTab(tabName) {
  // Remove active class from all right tab buttons
  document.querySelectorAll(".right-tab").forEach((btn) => {
      btn.classList.remove("active")
  })

  // Hide all right tab contents
  document.querySelectorAll(".right-tab-content").forEach((content) => {
      content.classList.add("hidden")
  })

  // Show selected tab content and activate button
  if (tabName === "local") {
      document.getElementById("localContent").classList.remove("hidden")
      document.querySelector(".right-tab:first-child").classList.add("active")
  } else if (tabName === "promotion") {
      document.getElementById("promotionContent").classList.remove("hidden")
      document.querySelector(".right-tab:last-child").classList.add("active")
  }
}

// ========================================
// หมวดหมู่: SURVEY & VOTING SYSTEM (ระบบสำรวจและโหวต)
// ========================================

/**
* ฟังก์ชันสำหรับส่งคะแนนโหวตหรือความคิดเห็น
* ใช้ใน: ส่วนสำรวจความคิดเห็นของผู้ใช้งาน
*/
function submitVote() {
  const checkedOptions = document.querySelectorAll('input[name="opinion"]:checked')
  if (checkedOptions.length === 0) {
      alert("กรุณาเลือกความคิดเห็นอย่างน้อย 1 ข้อ")
      return
  }

  const selectedValues = Array.from(checkedOptions).map((option) => option.value)
  alert("ขอบคุณสำหรับความคิดเห็นของท่าน\nตัวเลือกที่เลือก: " + selectedValues.join(", "))

  // Reset form
  checkedOptions.forEach((option) => {
      option.checked = false
  })
}

// ========================================
// หมวดหมู่: SIDEBAR & SCROLLING (แถบข้างและการเลื่อน)
// ========================================

/**
* ฟังก์ชันสำหรับเลื่อน sidebar ขึ้นลง
* ใช้ใน: การควบคุม sidebar ที่มีเนื้อหายาวเกินกว่าจะแสดงได้หมด
* @param {string} direction - ทิศทาง "up" หรือ "down"
*/
function scrollSidebar(direction) {
  const sidebar = document.getElementById("sidebarContent")
  const scrollAmount = 100

  if (direction === "up") {
      sidebar.scrollTop -= scrollAmount
  } else {
      sidebar.scrollTop += scrollAmount
  }
}

// ========================================
// หมวดหมู่: PROMOTIONAL BANNERS (แบนเนอร์โปรโมชั่น)
// ========================================

/**
* ฟังก์ชันสำหรับปิดแบนเนอร์โปรโมชั่น
* ใช้ใน: แบนเนอร์โฆษณาหรือประกาศที่สามารถปิดได้
*/
function closePromoBanner() {
  const banner = document.getElementById("promoBanner")
  banner.style.display = "none"
}

/**
* ฟังก์ชันสำหรับจัดการการอัพโหลดรูปภาพในแบนเนอร์โปรโมชั่น
* ใช้ใน: ระบบอัพโหลดรูปภาพสำหรับโปรโมชั่น (ยังไม่ได้ implement เต็มรูปแบบ)
*/
function handlePromoImageUpload() {
  const banner = document.getElementById("promoBanner")
  // สามารถเพิ่ม input file หรือ drag & drop functionality ได้ที่นี่
  console.log("Image upload functionality can be added here")

  // ตัวอย่างการเปลี่ยนเนื้อหาเมื่อคลิก
  const placeholder = banner.querySelector(".upload-placeholder")
  if (placeholder) {
      placeholder.innerHTML = `
      <div class="upload-icon">🖼️</div>
      <p>รูปภาพถูกเลือกแล้ว</p>
      <p class="upload-subtitle">ทองผาภูมิ</p>
    `
  }
}

// ========================================
// หมวดหมู่: TOURISM SLIDER (สไลเดอร์สถานที่ท่องเที่ยว)
// ========================================

let currentTourismSlide = 0

/**
* ฟังก์ชันสำหรับแสดงสไลด์สถานที่ท่องเที่ยวตามหมายเลข index
* ใช้ใน: ส่วนแสดงสถานที่ท่องเที่ยวแบบสไลเดอร์
* @param {number} index - หมายเลขสไลด์ที่ต้องการแสดง
*/
function showTourismSlide(index) {
  const slider = document.getElementById("tourismSlider")
  const dots = document.querySelectorAll(".tourism-dot")
  const slideWidth = 330 // 300px width + 30px gap

  // Update active dot
  dots.forEach((dot) => dot.classList.remove("active"))
  dots[index].classList.add("active")

  // Scroll to slide
  slider.scrollLeft = index * slideWidth
  currentTourismSlide = index
}

/**
* ฟังก์ชันสำหรับเริ่มต้นการทำงานของ Tourism Slider รองรับการลากเมาส์และทัช
* ใช้ใน: การตั้งค่าเริ่มต้นสำหรับสไลเดอร์สถานที่ท่องเที่ยว
*/
function initTourismSlider() {
  const slider = document.getElementById("tourismSlider")
  let isDown = false
  let startX
  let scrollLeft

  // Mouse drag functionality - ฟังก์ชันการลากด้วยเมาส์
  slider.addEventListener("mousedown", (e) => {
      isDown = true
      slider.classList.add("active")
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
  })

  slider.addEventListener("mouseleave", () => {
      isDown = false
      slider.classList.remove("active")
  })

  slider.addEventListener("mouseup", () => {
      isDown = false
      slider.classList.remove("active")
  })

  slider.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 2
      slider.scrollLeft = scrollLeft - walk
  })

  // Touch drag functionality - ฟังก์ชันการลากด้วยนิ้วบนมือถือ
  slider.addEventListener("touchstart", (e) => {
      startX = e.touches[0].pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
  })

  slider.addEventListener("touchmove", (e) => {
      if (!startX) return
      const x = e.touches[0].pageX - slider.offsetLeft
      const walk = (x - startX) * 2
      slider.scrollLeft = scrollLeft - walk
  })
}

// ========================================
// หมวดหมู่: MAP & LOCATION FILTERING (แผนที่และการกรองสถานที่)
// ========================================

/**
* ฟังก์ชันสำหรับกรองสถานที่ในแผนที่ตามประเภท
* ใช้ใน: ส่วนแผนที่ที่แสดงสถานที่ต่างๆ ที่สามารถกรองได้
* @param {string} type - ประเภทสถานที่ เช่น "gas", "restaurant", "landmark"
*/
function filterPlaces(type) {
  // Remove active class from all buttons
  document.querySelectorAll(".map-btn").forEach((btn) => {
      btn.classList.remove("active")
  })

  // Add active class to clicked button
  event.target.closest(".map-btn").classList.add("active")

  // Here you can add logic to highlight specific places on the map
  console.log("Filtering places by type:", type)

  // Example: You could show/hide markers or change map overlay
  switch (type) {
      case "gas":
          console.log("Showing gas stations")
          break
      case "restaurant":
          console.log("Showing restaurants")
          break
      case "landmark":
          console.log("Showing landmarks")
          break
  }
}

// ========================================
// หมวดหมู่: STATISTICS & ANIMATIONS (สถิติและแอนิเมชั่น)
// ========================================

/**
* ฟังก์ชันสำหรับทำแอนิเมชั่นตัวเลขสถิติแบบนับขึ้น
* ใช้ใน: ส่วนแสดงสถิติที่ต้องการให้ตัวเลขนับขึ้นอย่างสวยงาม
*/
function animateCounters() {
  const counters = document.querySelectorAll(".stat-value")
  const speed = 200

  counters.forEach((counter) => {
      const updateCount = () => {
          const target = Number.parseInt(counter.innerText.replace(/,/g, ""))
          const count = Number.parseInt(counter.getAttribute("data-count") || 0)
          const inc = target / speed

          if (count < target) {
              counter.setAttribute("data-count", Math.ceil(count + inc))
              counter.innerText = Math.ceil(count + inc).toLocaleString()
              setTimeout(updateCount, 1)
          } else {
              counter.innerText = target.toLocaleString()
          }
      }

      updateCount()
  })
}

/**
* ฟังก์ชันสำหรับเริ่มต้นแอนิเมชั่นเมื่อเลื่อนหน้าเว็บ
* ใช้ใน: การตรวจจับว่าผู้ใช้เลื่อนมาถึงส่วนไหนแล้วเพื่อเล่นแอนิเมชั่น
*/
function initScrollAnimations() {
  const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              if (entry.target.classList.contains("statistics-section")) {
                  animateCounters()
              }
              entry.target.classList.add("animate-in")
          }
      })
  }, observerOptions)

  // Observe sections for animation
  document.querySelectorAll(".tourism-section, .local-places-section, .statistics-section").forEach((section) => {
      observer.observe(section)
  })
}

// ========================================
// หมวดหมู่: EVENT LISTENERS & INITIALIZATION (ตัวรับฟังเหตุการณ์และการเริ่มต้น)
// ========================================

/**
* Event listener สำหรับปิด dropdown เมื่อคลิกข้างนอก
* ใช้ใน: ระบบ dropdown ทั้งหมดในเว็บไซต์
*/
document.addEventListener("click", (event) => {
  const langSelector = document.querySelector(".lang-selector")
  const dropdown = document.getElementById("langDropdown")

  if (!langSelector.contains(event.target)) {
      dropdown.classList.remove("show")
  }
})

/**
* ฟังก์ชันหลักสำหรับเริ่มต้นการทำงานของเว็บไซต์เมื่อโหลดหน้าเสร็จ
* ใช้ใน: การตั้งค่าเริ่มต้นทั้งหมดของเว็บไซต์
*/
document.addEventListener("DOMContentLoaded", () => {
  // Set default tab - ตั้งค่าแท็บเริ่มต้น
  switchTab("activities")

  // Initialize new features - เริ่มต้นฟีเจอร์ใหม่ๆ
  initTourismSlider()
  initScrollAnimations()

  // Auto-slide tourism slider every 5 seconds - เลื่อนสไลด์ท่องเที่ยวอัตโนมัติทุก 5 วินาที
  setInterval(() => {
      const nextSlide = (currentTourismSlide + 1) % 3
      showTourismSlide(nextSlide)
  }, 5000)

  // เพิ่ม event listener สำหรับ promo banner
  const promoBanner = document.getElementById("promoBanner")
  if (promoBanner) {
      promoBanner.addEventListener("click", (e) => {
          // ไม่ให้ trigger เมื่อคลิกปุ่มปิด
          if (!e.target.classList.contains("close-promo-btn")) {
              handlePromoImageUpload()
          }
      })
  }
})

// ========================================
// หมวดหมู่: HERO IMAGE SLIDER (สไลเดอร์รูปภาพหลัก)
// ========================================

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-image');
const dots = document.querySelectorAll('.dot');
const heroImages = document.querySelector('.hero-images');

let isDragging = false;
let startX = 0;
let dragThreshold = 50; // Minimum drag distance to change slide (in pixels)

/**
* ฟังก์ชันสำหรับแสดงสไลด์รูปภาพหลักตาม index
* ใช้ใน: ส่วน Hero section ที่แสดงรูปภาพหลักของเว็บไซต์
* @param {number} index - หมายเลขสไลด์ที่ต้องการแสดง
*/
function showSlide(index) {
  slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

/**
* ฟังก์ชันสำหรับกำหนดสไลด์ที่ต้องการแสดง
* ใช้ใน: การคลิก dot navigation
* @param {number} index - หมายเลขสไลด์
*/
function setSlide(index) {
  showSlide(index);
}

/**
* ฟังก์ชันสำหรับไปสไลด์ถัดไป
* ใช้ใน: ปุ่มเลื่อนไปข้างหน้าหรือระบบอัตโนมัติ
*/
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

/**
* ฟังก์ชันสำหรับกลับไปสไลด์ก่อนหน้า
* ใช้ใน: ปุ่มเลื่อนกลับหรือการลากไปทางขวา
*/
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// ========================================
// HERO SLIDER - MOUSE DRAG HANDLERS (ตัวจัดการการลากเมาส์)
// ========================================

/**
* Event handlers สำหรับการลากด้วยเมาส์ใน Hero Image Slider
*/
heroImages.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX;
  heroImages.style.cursor = 'grabbing';
});

heroImages.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault(); // Prevent text selection
});

heroImages.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  heroImages.style.cursor = 'grab';
  const endX = e.pageX;
  const dragDistance = endX - startX;

  if (dragDistance > dragThreshold) {
      prevSlide(); // Drag right to go to previous slide
  } else if (dragDistance < -dragThreshold) {
      nextSlide(); // Drag left to go to next slide
  }
});

heroImages.addEventListener('mouseleave', () => {
  if (isDragging) {
      isDragging = false;
      heroImages.style.cursor = 'grab';
  }
});

// ========================================
// HERO SLIDER - TOUCH HANDLERS (ตัวจัดการการสัมผัสสำหรับมือถือ)
// ========================================

/**
* Event handlers สำหรับการสัมผัสและลากบนมือถือ
*/
heroImages.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX;
});

heroImages.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  e.preventDefault(); // Prevent scrolling
});

heroImages.addEventListener('touchend', (e) => {
  if (!isDragging) return;
  isDragging = false;
  const endX = e.changedTouches[0].pageX;
  const dragDistance = endX - startX;

  if (dragDistance > dragThreshold) {
      prevSlide(); // Swipe right to go to previous slide
  } else if (dragDistance < -dragThreshold) {
      nextSlide(); // Swipe left to go to next slide
  }
});

// ========================================
// AUTO-PLAY & INITIALIZATION (เล่นอัตโนมัติและการเริ่มต้น)
// ========================================

/**
* ระบบเล่นสไลด์อัตโนมัติทุก 5 วินาที
*/
setInterval(nextSlide, 5000);

/**
* เริ่มต้นแสดงสไลด์แรก
*/
showSlide(currentSlide);