import * as React from 'react';import Box from '@mui/material/Box';
import {
	Row,
	Col,
	Card,
	Form,
	FormGroup,
	Label,
	Input,
	FormFeedback,
	Button,
	CardHeader,
	CardTitle,
	CardBody,
} from 'reactstrap';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';

const steps = ['Personal Details', 'Company Details', 'Email Verification'];

export default function HorizontalLinearStepper() {
	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	// const handleReset = () => {
	// 	setActiveStep(0);
	// };

	const validateForm = (e) => {
		e.preventDefault();
	};

	// window.console.log(steps.length);
	const PersonalData = () => {
		return (
			<>
				<Row className='align-items-center justify-content-center mt-2'>
					<Col xs='5'>
						<Card className='p-4'>
							<CardHeader className='bg-white text-center'>
								<CardTitle tag='h3' className='font-weight-bold'>
									Add your personal details
								</CardTitle>
							</CardHeader>
							<CardBody>
								<Form
									className='was-validated'
									noValidate
									onSubmit={validateForm}>
									<FormGroup>
										<Label for='name'>Full Name</Label>
										<Input
											type='text'
											name='name'
											id='fullName'
											placeholder='Full Name'
											required
										/>
										<FormFeedback invalid>full name is required *</FormFeedback>
									</FormGroup>
									<FormGroup tag='fieldset' inline>
										<legend>Gender</legend>
										<FormGroup check>
											<Label check>
												<Input
													type='radio'
													name='radio1'
													className=''
													required
												/>{' '}
												Male
											</Label>
											<Label check className='mx-5'>
												<Input type='radio' name='radio1' className='' /> Female
											</Label>
											<Label check>
												<Input type='radio' name='radio1' /> Others
											</Label>
											<FormFeedback invalid>
												Please choose gender *
											</FormFeedback>
										</FormGroup>
									</FormGroup>

									<FormGroup>
										<Label for='exampleSelect'>Country</Label>
										<Input type='select' name='country' required>
											<option value=''>select country</option>
											<option value='in'>India</option>
											<option value='rs'>Russia</option>
											<option value='sl'>Sri Lanka</option>
											<option value='usa'>USA</option>
											<option value='usa'>UK</option>
										</Input>
										<FormFeedback invalid>Select Country *</FormFeedback>
									</FormGroup>
									<FormGroup>
										<Label for='exampleSelect'>State</Label>
										<Input type='select' name='state' required>
											<option value=''>select state</option>
											<option value='Ap'>Andhra Pradesh</option>
											<option value='TS'>Telangana</option>
											<option value='TN'>Tamil Nadu</option>
											<option value='Os'>Odisha</option>
											<option value='KN'>Banglore</option>
										</Input>
										<FormFeedback invalid>Select State *</FormFeedback>
									</FormGroup>

									<FormGroup>
										<Label for='phone'>Phone</Label>
										<Input
											type='tel'
											maxLength={10}
											name='phone'
											id='phoneNo'
											placeholder='Phone No'
											required
										/>
										<FormFeedback invalid>Phone No is required *</FormFeedback>
									</FormGroup>

									<Button
										type='submit'
										className='text-cen bg-warning'
										block
										onClick={handleNext}>
										{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
									</Button>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</>
		);
	};

	const CompanyData = () => {
		return (
			<>
				<Row className='align-items-center justify-content-center mt-2'>
					<Col xs='5'>
						<Card className='p-4'>
							<CardHeader className='bg-white text-center'>
								<CardTitle tag='h3' className='font-weight-bold'>
									Add your company details
								</CardTitle>
							</CardHeader>
							<CardBody>
								<Form
									className='was-validated'
									noValidate
									onSubmit={validateForm}>
									<FormGroup>
										<Label for='logo'>Upload Logo</Label>
										<Input
											type='file'
											accept='image/*'
											required
											//display:none property
										/>
										<FormFeedback invalid>Logo is required *</FormFeedback>
									</FormGroup>
									<FormGroup>
										<Label for='companyName'>Company Name</Label>
										<Input
											type='text'
											name='companyName'
											id='companyName'
											placeholder='Company Name'
											required
										/>
										<FormFeedback invalid>
											company name is required *
										</FormFeedback>
									</FormGroup>

									<FormGroup>
										<Label for='emailId'>EmailId</Label>
										<Input
											type='email'
											name='emailId'
											id='emailId'
											placeholder='emailId'
											required
										/>
										<FormFeedback invalid>emailId is required *</FormFeedback>
									</FormGroup>
									<FormGroup>
										<Label for='emailId'>Job Title</Label>
										<Input
											type='text'
											name='jobTitle'
											id='jobTitle'
											placeholder='job Title'
											required
										/>
										<FormFeedback invalid>Job Title is required *</FormFeedback>
									</FormGroup>

									<FormGroup>
										<Label for='emailId'>Years Of Experience</Label>
										<Input
											type='number'
											name='yoe'
											id='yoe'
											placeholder='Experience(Years)'
											required
										/>
										<FormFeedback invalid>
											Experience is required field*
										</FormFeedback>
									</FormGroup>

									<FormGroup className='d-flex align-items-center justify-content-between'>
										<Button
											type='submit'
											className='text-center bg-warning px-4'
											disabled={activeStep === 0}
											onClick={handleBack}>
											Back
										</Button>

										<Button
											type='submit'
											className='text-cen bg-warning px-4'
											onClick={handleNext}>
											{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
										</Button>
									</FormGroup>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</>
		);
	};
	const EmailVerify = () => {
		return (
			<>
				<Row className='align-items-center justify-content-center mt-2'>
					<Col xs='5'>
						<Card className='p-4'>
							<CardHeader className='bg-white text-center'>
								<CardTitle tag='h3' className='font-weight-bold'>
									Enter Your OTP
								</CardTitle>
							</CardHeader>
							<CardBody>
								<Form
									className='was-validated'
									noValidate
									onSubmit={validateForm}>
									<Label for='logo'>Enter your Code</Label>
									<FormGroup className='d-flex'>
										<Input type='text' name='otp' className='w-25' required />
										<Input type='text' name='otp' className='w-25' required />
										<Input type='text' name='otp' className='w-25' required />
										<Input type='text' name='otp' className='w-25' required />
									</FormGroup>

									<FormGroup className='d-flex align-items-center justify-content-between'>
										<Button
											type='submit'
											className='text-center bg-warning px-4'
											disabled={activeStep === 0}
											onClick={handleBack}>
											Back
										</Button>

										<Button
											type='submit'
											className='text-cen bg-warning px-4'
											onClick={handleNext}>
											Verify
										</Button>
									</FormGroup>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</>
		);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Card className='bg-primary' style={{ padding: '1rem 20rem' }}>
				<Stepper activeStep={activeStep}>
					{steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};

						if (isStepSkipped(index)) {
							stepProps.completed = false;
						}
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
			</Card>
			{activeStep === 0 ? (
				<PersonalData />
			) : activeStep === 1 ? (
				<CompanyData />
			) : activeStep === 2 ? (
				<EmailVerify />
			) : (
				''
			)}
			{activeStep === steps.length ? (
				<React.Fragment>
					<CardTitle
						tag='h6'
						className='font-weight-bold text-center text-success my-3'>
						Thanks for your Time !!
					</CardTitle>
				</React.Fragment>
			) : (
				''
			)}
		</Box>
	);
}
