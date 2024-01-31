<script lang="ts">
	let project: string = '';
	let applicant: string = '';
	let attention: string = '';
	let review_number: string = '';
	let approval_status: string = '';
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
		let empty_fields = [];
		if (!project) empty_fields.push('Project');
		if (!applicant) empty_fields.push('Applicant');
		if (!attention) empty_fields.push('Attention');
		if (!review_number) empty_fields.push('Review Number');
		if (!approval_status) empty_fields.push('Approval Status');
		if (!formatted_deadline) empty_fields.push('Deadline');
		if (onsite_easement === null) empty_fields.push('Onsite Easement');
		if (offsite_easement === null) empty_fields.push('Offsite Easement');
		if (deq_approval === null) empty_fields.push('DEQ Approval');
		if (vdh_approval === null) empty_fields.push('VDH Approval');
		if (vdh_report === null) empty_fields.push('VDH Report');
		if (pump_station === null) empty_fields.push('Pump Station');

		if (empty_fields.length > 0) {
			alert(`Please fill out the following fields: ${empty_fields.join(', ')}`);
			return;
		}
		window.print();

		project = '';
		applicant = '';
		attention = '';
		review_number = '';
		approval_status = '';
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

<form on:submit|preventDefault={handle_submit}>
	<div class="outer_flexbox">
		<div class="inner_flexbox">
			<label for="project">Project: </label>
			<input
				type="text"
				id="project"
				name="project"
				bind:value={project}
				placeholder="Project Name"
			/>
		</div>

		<div class="inner_flexbox">
			<label for="Applicant">Applicant: </label>
			<input
				type="text"
				id="Applicant"
				name="Applicant"
				bind:value={applicant}
				placeholder="Applicant Name"
			/>
		</div>

		<div class="inner_flexbox">
			<label for="Attention">Attention: </label>
			<input
				type="text"
				id="Attention"
				name="Attention"
				bind:value={attention}
				placeholder="Attention"
			/>
		</div>
	</div>

	<h2>Review Status</h2>

	<div class="outer_flexbox">
		<div class="inner_flexbox">
			<label for="Review_Number">Review Number: </label>
			<input type="text" id="Review_Number" name="Review_Number" bind:value={review_number} />
		</div>

		<div class="inner_flexbox">
			<label>
				<input type="radio" bind:group={approval_status} value="correct" />
				Correct & Resubmit
			</label>

			<label>
				<input type="radio" bind:group={approval_status} value="noted" />
				Approved as Noted
			</label>

			<label>
				<input type="radio" bind:group={approval_status} value="approved" />
				Approved
			</label>
		</div>
	</div>

	<h2>Drawings</h2>
	<div class="outer_flexbox">
		<div class="inner_flexbox">
			<label for="Deadline">Not later than</label>
			<input type="text" id="Deadline" name="Deadline" placeholder={formatted_deadline} />
		</div>

		<div class="inner_flexbox">
			<ol>
				<li>Hard copy of the entire approved plan set to the address above.</li>
				<li>
					A digital copy of the entire approved plan set as a multi-page PDF to <a
						href="mailto:admin@frederickwater.com">admin@frederickwater.com</a
					>.
				</li>
			</ol>
		</div>
	</div>

	<h2>Easements</h2>
	<div class="outer_flexbox">
		<div class="inner_flexbox">
			<label>
				<input type="radio" bind:group={onsite_easement} value="true" />
				Y
			</label>
			<label>
				<input type="radio" bind:group={onsite_easement} value="false" />
				N
			</label>
		</div>
		<div class="inner_flexbox">
			<p>A copy of the recorded onsite Frederick Water (FW) easement(s) is/are required.</p>
		</div>
	</div>

	<div class="outer_flexbox">
		<div class="inner_flexbox">
			<label>
				<input type="radio" bind:group={offsite_easement} value="true" />
				Y
			</label>
			<label>
				<input type="radio" bind:group={offsite_easement} value="false" />
				N
			</label>
		</div>
		<div class="inner_flexbox">
			<ul>
				<li>A copy of the recorded offsite FW easement(s) is/are required.</li>
				<li>The easement document shall contain a plat and both shall be signed by FW.</li>
				<li>FW requires specific language in its deed of easement.</li>
				<li>
					Visit our website (<a href="https://frederickwater.com">frederickwater.com</a>) to obtain
					a copy of the form.
				</li>
				<li>
					A copy of the recorded deed(s) of easement is required before work is to begin on offsite
					property.
				</li>
			</ul>
		</div>
	</div>

	<h2>Other</h2>
	<div class="outer_flexbox">
		<div class="inner_flexbox">
			<label>
				<input type="radio" bind:group={deq_approval} value="true" />
				Y
			</label>
			<label>
				<input type="radio" bind:group={deq_approval} value="false" />
				N
			</label>
		</div>
		<div class="inner_flexbox">
			<p>This project also requires DEQ &ndash; Valley Region Office approval.</p>
		</div>
	</div>
	<div class="outer_flexbox">
		<div class="inner_flexbox">
			<label>
				<input type="radio" bind:group={vdh_approval} value="true" />
				Y
			</label>
			<label>
				<input type="radio" bind:group={vdh_approval} value="false" />
				N
			</label>
		</div>
		<div class="inner_flexbox">
			<p>This project also requires VDH &ndash; Culpeper Field Office approval.</p>
		</div>
	</div>
	<div class="outer_flexbox">
		<div class="inner_flexbox">
			<label>
				<input type="radio" bind:group={vdh_report} value="true" />
				Y
			</label>
			<label>
				<input type="radio" bind:group={vdh_report} value="false" />
				N
			</label>
		</div>
		<div class="inner_flexbox">
			<p>
				This project requires VDH &ndash; Culpeper Field Office &ndash; Project Summary Report<i>
					by date for drawings above</i
				> (see website for form).
			</p>
		</div>
	</div>
	<div class="outer_flexbox">
		<div class="inner_flexbox">
			<label>
				<input type="radio" bind:group={pump_station} value="true" />
				Y
			</label>
			<label>
				<input type="radio" bind:group={pump_station} value="false" />
				N
			</label>
		</div>
		<div class="inner_flexbox">
			<p>
				This project has a sewer pump station that FW will own. Title to the pump station site shall
				be granted to FW in fee simple absolute. Also, (1) a copy of DEQ's Certificate to Construct,
				(2) a copy of DEQ's Certificate to Operate, and (3) two copies of the FW-approved O&M manual
				are required. These documents must be received before service will be authorized.
			</p>
		</div>
	</div>

	<p class="warning">
		Work cannot commence that would connect to FW facilities or require FW inspections until the
		contract, as applicable and sent to owner under separate cover, is returned to this office.
	</p>

	<div class="outer_flexbox">
		<div class="inner_flexbox">
			Date: {formatted_today}
		</div>
		<div class="inner_flexbox">Earl W. Wiley &ndash; Engineering Assistant</div>
		<div class="inner_flexbox">FEB 24</div>
	</div>
	<button type="submit">Print</button>
</form>

<style>
	:global(body) {
		font-family: Arial, sans-serif;
		font-size: 12px;
		margin: 2rem;
		padding: 1rem;
		line-height: 2;
	}

	button {
		background-color: #014b92;
		color: #fff;
		padding: 0.5rem 1rem;
		border: none;
		margin-top: 2rem;
	}

	h2 {
		font-size: 14px;
	}

	ol {
		margin-top: 0px;
	}

	ul {
		margin-top: 0px;
	}

	.outer_flexbox {
		display: flex;
	}

	.inner_flexbox {
		margin-right: 2rem;
		max-width: 80%;
	}

	.inner_flexbox p {
		margin-top: 0px;
	}

	.warning {
		background-color: yellow;
		padding: 0.25rem 1rem;
		margin-top: 0px;
	}

	@media print {
		button {
			display: none;
		}

		form {
			width: 210mm;
			height: 282mm;
			font-size: 10px;
		}
	}
</style>
