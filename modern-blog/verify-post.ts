import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkPost() {
    const post = await prisma.post.findUnique({
        where: { slug: 'how-to-test-ai-agents-agentforce-qa-guide' }
    });

    if (post) {
        console.log('✅ Post found!\n');

        // Check for inline citations (without hyperlinks)
        const hasInlineCitation = post.content.includes('According to Gartner');
        console.log('Has inline citation "According to Gartner":', hasInlineCitation ? '✅ YES' : '❌ NO');

        // Check for Sources section
        const hasSources = post.content.includes('<h2>Sources</h2>');
        console.log('Has Sources section:', hasSources ? '✅ YES' : '❌ NO');

        // Check for PDF download section
        const hasPdfDownload = post.content.includes('Download the Complete QA Checklist');
        console.log('Has PDF download section:', hasPdfDownload ? '✅ YES' : '❌ NO');

        // Check if old hyperlinks are gone
        const hasOldHyperlinks = post.content.includes('href="https://www.gartner.com');
        console.log('Has old Gartner hyperlinks:', hasOldHyperlinks ? '❌ STILL THERE' : '✅ REMOVED');

        console.log('\n=== STATISTICS SECTION ===');
        const statsStart = post.content.indexOf('agentic AI market');
        console.log(post.content.substring(statsStart, statsStart + 400));

        console.log('\n=== LAST 600 CHARACTERS (should show Sources) ===');
        console.log(post.content.substring(post.content.length - 600));
    } else {
        console.log('❌ Post not found');
    }

    await prisma.$disconnect();
}

checkPost();
