const renderCertCard = function (data) {
  const cardTemplate = `
  <div class="col-12 col-md-6 col-lg-4 my-2">
    <div class="card bg-light h-100">
      <h6 class="card-header course-subject pb-2">${data.subject}</h6>
      <div class="card-body pt-3 pb-2">
        <h6 class="card-title course-title">
          <a href="${data.url}" target="_blank">
            ${data.title}
          </a>
        </h6>
      </div>
      <div class="card-footer course-info bg-light">
        <p class="card-text text-muted small mb-2 ml-1">강의 수준: ${data.level}</p>
        <p class="card-text text-muted small mt-2 ml-1">강의 기간: ${data.length}주</p>
      </div>
    </div>
  </div>`
  $("#certificates").append(cardTemplate)
}


$.getJSON('certificates.json', function (data) {
  data.forEach(entry => {
    renderCertCard(entry)
  });
})



const renderSkillCard = function (data) {
  let exampleBtn = ""
  if (data.exampleUrl) {
    exampleBtn = `<a
    class="btn btn-outline-secondary btn-sm"
    role="button"
    href="${data.exampleUrl}"
    target="_blank"
    >활용 예시</a
    >`
  }

  const cardTemplate = `
  <div class="col-12 col-lg-6 my-2">
    <div class="card bg-light h-100">
      <div class="card-body pt-3 pb-2">
        <div class="row">
          <h5 class="card-title col-8">
            ${data.skillName}
          </h5>
          <p class="small text-center col-4">${data.level}</p>
        </div>
        <p class="text-muted">${data.description}<p>
        ${exampleBtn}
      </div>
    </div>
  </div>`
  $("#skills-list").append(cardTemplate)
}


$.getJSON('skills.json', function (data) {
  data.forEach(entry => {
    renderSkillCard(entry)
  });
})
