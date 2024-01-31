<script lang="ts">
  let project: string = "";
  let applicant: string = "";
  let attention: string = "";
  let review_number: string = "";
    let approval_status: string = "";
    let today = new Date();
    let deadline = new Date();
    deadline.setDate(today.getDate() + 21);
    let formatted_today = today.toLocaleDateString();
    let formatted_deadline = deadline.toLocaleDateString();
    let onsite_easement: Boolean | null;
    let offsite_easement: Boolean | null;
    let deq_approval: Boolean | null;
    let vdh_approval: Boolean | null;
    let vdh_report: Boolean | null;
    let pump_station: Boolean | null;

    function handle_submit(event: Event) {
      window.print();

      project = "";
     applicant = "";
     attention = "";
     review_number = "";
     approval_status = "";
    today = new Date();
    deadline = new Date();
    deadline.setDate(deadline.getDate() + 21);
    formatted_today = today.toLocaleDateString();
    formatted_deadline = deadline.toLocaleDateString();
    onsite_easement = null;
    offsite_easement = null;
    deq_approval = null;
    vdh_approval = null;
    vdh_report = null;
    pump_station = null;
    }
  </script>

<div class="contact_info">
    <div class="left_flexbox">
      <p>PO Box 1877, Winchester, VA 22604-8377</p>
      <p>315 Tasker Road, Stephens City, VA 22655</p>
    </div>
    <div class="right_flexbox">
      <p>540.868.1061 voice</p>
      <p>540.868.1429 fax</p>
    </div>
  </div>

  <form on:submit|preventDefault={handle_submit}>
    <div>
    <label for="project">Project</label>
    <input type="text" id="project" name="project" bind:value={project} placeholder="Project Name" required />

    <label for="Applicant">Applicant</label>
    <input type="text" id="Applicant" name="Applicant" bind:value={applicant} placeholder="Applicant Name" required />
</div>

    <label for="Attention">Attention</label>
    <input type="text" id="Attention" name="Attention" bind:value={attention} placeholder="Attention" />

    <h2>Review Status</h2>

    <label for="Review_Number">Review Number</label>
    <input type="text" id="Review_Number" name="Review_Number" bind:value={review_number} required />

    <div>
    <label>
        <input type="radio" bind:group={approval_status} value="correct">
        Correct & Resubmit
      </label>
    
      <label>
        <input type="radio" bind:group={approval_status} value="noted">
        Approved as Noted
      </label>
    
      <label>
        <input type="radio" bind:group={approval_status} value="approved">
        Approved
      </label>
    </div>

    <h2>Drawings</h2>
    <label for="Deadline">Not later than</label>
    <input type="text" id="Deadline" name="Deadline" placeholder={formatted_deadline} />

    <ol>
      <li>Hard copy of the entire approved plan set to the address above.</li>
      <li>A digital copy of the entire approved plan set as a multi-page PDF to <a href="mailto:admin@frederickwater.com">admin@frederickwater.com</a>.</li>
    </ol>

    <h2>Easements</h2>
    <div>
      <label>
      <input type="radio" bind:group={onsite_easement} value=true>
    Y
    </label>
    <label>
      <input type="radio" bind:group={onsite_easement} value=false>
      N
    </label>
    <p>A copy of the recorded onsite Frederick Water (FW) easement(s) is/are required.</p>
    </div>

    <div>
      <label>
        <input type="radio" bind:group={offsite_easement} value=true>
        Y
      </label>
      <label>
        <input type="radio" bind:group={offsite_easement} value=false>
        N
      </label>
      <ul>
        <li>A copy of the recorded offsite FW easement(s) is/are required.</li>
        <li>The easement document shall contain a plat and both shall be signed by FW.</li>
        <li>FW requires specific language in its deed of easement.</li>
        <li>Visit our website (<a href="https://frederickwater.com">frederickwater.com</a>) to obtain a copy of the form.</li>
        <li>A copy of the recorded deed(s) of easement is required before work is to begin on offsite property.</li>
      </ul>
    </div>

    <h2>Other</h2>
    <div>
      <label>
      <input type="radio" bind:group={deq_approval} value=true>
      Y
    </label>
    <label>
      <input type="radio" bind:group={deq_approval} value=false>
      N
    </label>
    <p>This project also requires DEQ &ndash; Valley Region Office approval.</p><br />
    </div>
    <div>
    <label>
      <input type="radio" bind:group={vdh_approval} value=true>
      Y
    </label>
    <label>
      <input type="radio" bind:group={vdh_approval} value=false>
      N
    </label>
    <p>This project also requires VDH &ndash; Culpeper Field Office approval.</p><br />
  </div>
  <div>
    <label>
      <input type="radio" bind:group={vdh_report} value=true>
      Y
    </label>
    <label>
    <input type="radio" bind:group={vdh_report} value=false>
      N
    </label>
    <p>This project requires VDH &ndash; Culpeper Field Office &ndash; Project Summary Report <i>by date for drawings above</i> (see website for form).</p><br />
  </div>
  <div>
    <label>
      <input type="radio" bind:group={pump_station} value=true>
      Y
    </label>
    <label>
      <input type="radio" bind:group={pump_station} value=false>
      N
    </label>
    <p>This project has a sewer pump station that FW will own. Title to the pump station site shall be granted to FW in fee simple absolute. Also, (1) a copy of DEQ's Certificate to Construct, (2) a copy of DEQ's Certificate to Operate, and (3) two copies of the FW-approved O&M manual are required. These documents must be received before service will be authorized.</p>
  </div>
    <button type="submit">Print</button>
  </form>

  <p class="warning">Work cannot commence that would connect to FW facilities or require FW inspections until the contract, as applicable and sent to owner under separate cover, is returned to this office.</p><br />

  <p>Date: {formatted_today}</p>
  <div>
    <div class="left_flexbox">
      <p>Earl W. Wiley &ndash; Engineering Assistant</p>
    </div>
    <div class="right_flexbox">
      <p>AUG 23</p>
    </div>
  </div>
  <style>
    :global(body) {
      font-family: Arial, sans-serif;
      margin: 2rem;
      padding: 1rem;
      line-height: 2;
    }

    button {
      background-color: #014b92;
      color: #fff;
      padding: 0.5rem 1rem;
      border: none;
    }

    .contact_info {
      margin-bottom: 1rem;
      font-size: 0.8rem;
      line-height: 0.8;
      display: flex;
      justify-content: space-between;
    }

    .left_flexbox {
      flex: 1;
    }

    .right_flexbox {
      flex: 1;
      text-align: right;
    }

    .warning {
      background-color: yellow;
      padding: 1rem;
    }
    
    @media print {
  button {
    display: none;
  }
}
  </style>