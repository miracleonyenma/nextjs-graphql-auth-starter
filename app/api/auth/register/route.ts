import registerUser from "@/utils/auth/registerUser";

const POST = async (request: Request) => {
  const body = await request.json();

  try {
    const data = await registerUser({ ...body });
    return Response.json(data);
  } catch (error) {
    return new Response((error as Error).message, { status: 500 });
  }
};

export { POST };
