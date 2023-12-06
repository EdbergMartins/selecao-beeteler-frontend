
const GRIA_URL = process.env.REACT_APP_GRIA_URL;

export const urlCandidateArea = (applicationId: string) => {
	const COMPLEMENT = applicationId ? `/applications/${applicationId}` : '/jobs';

	return `${GRIA_URL}/candidate${COMPLEMENT}`;
}