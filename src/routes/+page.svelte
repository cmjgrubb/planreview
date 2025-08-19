<script lang="ts">
	let project: string = '';
	let applicant: string = '';
	let attention: string = '';
	let review_number: string = '';
	let approval_status: string = '';
	let no_corrected: string = '';
	let comments: string = '';
	let today = new Date();
	let deadline = new Date();
	deadline.setDate(today.getDate() + 21);
	let formatted_today = today.toLocaleDateString();
	let formatted_deadline = deadline.toLocaleDateString();
	let hard_copy: Boolean = true;
	let digital_copy: Boolean = true;
	let onsite_easement: Boolean | null = null;
	let offsite_easement: Boolean | null = null;
	let deq_approval: Boolean | null = null;
	let vdh_approval: Boolean | null = null;
	let vdh_report: Boolean | null = null;
	let pump_station: Boolean | null = null;

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
		no_corrected = '';
		comments = '';
		today = new Date();
		deadline = new Date();
		deadline.setDate(deadline.getDate() + 21);
		formatted_today = today.toLocaleDateString();
		formatted_deadline = deadline.toLocaleDateString();
		hard_copy = true;
		digital_copy = true;
		onsite_easement = null;
		offsite_easement = null;
		deq_approval = null;
		vdh_approval = null;
		vdh_report = null;
		pump_station = null;
	}
</script>

<div class="print-container">
	<form on:submit|preventDefault={handle_submit}>
		<div class="name">
			<div>
				<label for="project">Project: </label>
				<input
					class="name_text"
					type="text"
					id="project"
					name="project"
					bind:value={project}
					placeholder="Project Name"
				/>
			</div>

			<div>
				<label for="Applicant">Applicant: </label>
				<input
					class="name_text"
					type="text"
					id="Applicant"
					name="Applicant"
					bind:value={applicant}
					placeholder="Applicant Name"
				/>
			</div>

			<div>
				<label for="Attention">Attention: </label>
				<input
					class="name_text"
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
			<div class="inner_flexbox" style="margin-right: 60px;">
				<label for="Review_Number">Review Number: </label>
				<input
					class="number_text"
					type="text"
					id="Review_Number"
					name="Review_Number"
					bind:value={review_number}
				/>
			</div>

			<div class="inner_flexbox" style="margin-right: 60px;">
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
			<div class="inner_flexbox">
				<label for="No_Corrected">Number of Corrections: </label>
				<input
					class="number_text"
					type="text"
					id="No_Corrected"
					name="No_Corrected"
					bind:value={no_corrected}
				/>
			</div>
		</div>
		<br />
		<div style="display: flex; flex-direction: column; margin-top: -10px;">
			<label for="Comments" style="order: 1;">Comments: </label>
			<textarea
				id="Comments"
				name="Comments"
				rows="6"
				cols="50"
				bind:value={comments}
				style="order: 2;"
			/>
		</div>

		<h2>Drawings</h2>
		<div class="flex_container">
			<div class="deadline_input">
				<label for="Deadline">Not later than</label>
				<input
					class="date_text"
					type="text"
					id="Deadline"
					name="Deadline"
					placeholder={formatted_deadline}
				/>
			</div>
			<div class="drawings_radio_inputs">
				<div class="outer_flexbox">
					<div class="inner_flexbox">
						<label>
							<input type="radio" bind:group={hard_copy} value={true} />
							Y
						</label>
						<label>
							<input type="radio" bind:group={hard_copy} value={false} />
							N
						</label>
					</div>
					<div class="inner_flexbox">
						<p>
							(1) full-size and (1) half-size hard copies of the entire approved plan set to the
							address above.
						</p>
					</div>
				</div>
				<div class="outer_flexbox">
					<div class="inner_flexbox">
						<label>
							<input type="radio" bind:group={digital_copy} value={true} />
							Y
						</label>
						<label>
							<input type="radio" bind:group={digital_copy} value={false} />
							N
						</label>
					</div>
					<div class="inner_flexbox">
						<p>
							A digital copy of the entire approved plan set as a multi-page PDF to <a
								href="mailto:admin@frederickwater.com">admin@frederickwater.com</a
							>.
						</p>
					</div>
				</div>
			</div>
		</div>

		<h2>Easements</h2>
		<div class="flex_container">
			<div class="easements_radio_inputs">
				<div class="outer_flexbox">
					<div class="inner_flexbox">
						<label>
							<input type="radio" bind:group={onsite_easement} value={true} />
							Y
						</label>
						<label>
							<input type="radio" bind:group={onsite_easement} value={false} />
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
							<input type="radio" bind:group={offsite_easement} value={true} />
							Y
						</label>
						<label>
							<input type="radio" bind:group={offsite_easement} value={false} />
							N
						</label>
					</div>
					<div class="inner_flexbox">
						<p>A copy of the recorded offsite FW easement(s) is/are required.</p>
					</div>
				</div>
			</div>

			<div class="easements_ul">
				<ul>
					<li>The easement document shall contain a plat and both shall be signed by FW.</li>
					<li>FW requires specific language in its deed of easement.</li>
					<li>
						Visit our website (<a href="https://frederickwater.com">frederickwater.com</a>) to
						obtain a copy of the form.
					</li>
					<li>
						A copy of the recorded deed(s) of easement is required before work is to begin on
						offsite property.
					</li>
				</ul>
			</div>
		</div>

		<h2>Other</h2>
		<div class="outer_flexbox">
			<div class="inner_flexbox">
				<label>
					<input type="radio" bind:group={deq_approval} value={true} />
					Y
				</label>
				<label>
					<input type="radio" bind:group={deq_approval} value={false} />
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
					<input type="radio" bind:group={vdh_approval} value={true} />
					Y
				</label>
				<label>
					<input type="radio" bind:group={vdh_approval} value={false} />
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
					<input type="radio" bind:group={vdh_report} value={true} />
					Y
				</label>
				<label>
					<input type="radio" bind:group={vdh_report} value={false} />
					N
				</label>
			</div>
			<div class="inner_flexbox">
				<p>
					This project requires VDH &ndash; Culpeper Field Office &ndash; Project Summary Report <strong
						><u>by date for drawings above</u></strong
					> (see website for form).
				</p>
			</div>
		</div>
		<div class="outer_flexbox">
			<div class="inner_flexbox">
				<label>
					<input type="radio" bind:group={pump_station} value={true} />
					Y
				</label>
				<label>
					<input type="radio" bind:group={pump_station} value={false} />
					N
				</label>
			</div>
			<div class="inner_flexbox">
				<p>
					This project has a sewer pump station that FW will own. Title to the pump station site
					shall be granted to FW in fee simple absolute. Also, (1) a copy of DEQ's Certificate to
					Construct, (2) a copy of DEQ's Certificate to Operate, and (3) two copies of the
					FW-approved O&M manual are required. These documents must be received before service will
					be authorized.
				</p>
			</div>
		</div>

		<p class="warning">
			WORK INVOLVING THE CONNECTION TO OR INSTALLATION OF FREDERICK WATER FACILITIES, OR ANY
			ACTIVITY REQUIRING FREDERICK WATER INSPECTIONS, CANNOT BEGIN UNTIL THE DRAWINGS, OFF-SITE
			EASEMENT (IF REQUIRED), AND CONTRACT (IF REQUIRED)—SENT SEPARATELY TO THE OWNER—HAVE BEEN
			RETURNED TO THIS OFFICE
		</p>

		<div class="outer_flexbox">
			<div class="inner_flexbox">
				Date: {formatted_today}
			</div>
			<div class="inner_flexbox">Earl W. Wiley &ndash; Engineering Assistant</div>
			<div class="inner_flexbox">AUG 25</div>
		</div>
		<button type="submit">Print</button>
	</form>
</div>

<style>
	:global(body) {
		font-family: Arial, sans-serif;
		font-size: 12px;
		margin: 1.5rem;
		padding: 0rem;
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
		margin-top: 1rem;
		margin-bottom: 0px;
	}

	input {
		height: 13px;
		margin: 0px;
		margin-left: 8px;
		font-size: 12px;
	}

	ul {
		margin: 0px;
	}

	.outer_flexbox {
		display: flex;
	}

	.inner_flexbox {
		margin: 0px;
		margin-right: 1rem;
		max-width: 75%;
	}

	.inner_flexbox p {
		margin: 0px;
	}

	.name {
		line-height: 3;
	}

	.name_text {
		width: 600px;
	}

	.number_text {
		width: 40px;
	}

	.date_text {
		width: 80px;
	}

	.warning {
		color: red;
		margin-top: 2rem;
		margin-bottom: 2.5rem;
		font-size: 12px;
	}

	.flex_container {
		display: flex;
		/* justify-content: space-between; */
	}

	.deadline_input {
		width: 20%;
	}

	.drawings_radio_inputs {
		width: 80%;
	}

	.easements_radio_inputs {
		width: 55%;
	}

	.easements_ul {
		width: 45%;
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

		.print-container {
			height: 21cm;
			width: 29cm;
			/* overflow: hidden; */
			margin: -1.5rem;
			padding: 0;
			box-sizing: border-box;
		}
	}
</style>
