const accordion = document.querySelector('[data-js="accordion"]');

export function openAccordion() {
  accordion?.addEventListener("click", (e) => {
    const accordionLabelID = e.target.dataset.accordionLabel;
    const clickedAccordionBtn = document.querySelector(
      `[data-accordion-label="${accordionLabelID}"]`
    );
    const accordionItemToBeOpened = document.querySelector(
      `[data-accordion-content="${accordionLabelID}"]`
    );

    if (!e.target.dataset.accordionLabel) {
      return;
    }

    clickedAccordionBtn.classList.toggle("is-open");
    accordionItemToBeOpened.classList.toggle("is-open");
  });
}
